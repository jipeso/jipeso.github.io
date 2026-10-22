import { cp, readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { chromium, type Page as BrowserPage } from '@playwright/test'
import { defineConfig } from 'vitest/config'
import { type HtmlTagDescriptor, type Plugin, type ViteBuilder } from 'vite'
import { cvList } from './src/data/cv.ts'
import { profile } from './src/data/profile.ts'
import { colors } from './src/theme.ts'

const OG_IMAGE = { path: 'og-image.png', width: 1200, height: 630 }
const SSR_ENTRY = 'src/entry-server.ts'
const SSR_OUT_DIR = 'node_modules/.tmp/ssr'
const PAGES = ['index.html', ...cvList.map(cv => cv.page)]
const PRINT_ORIGIN = 'http://localhost'
const LATIN_FONT = /-latin-\d+-normal-.+\.woff2$/

interface ServerEntry {
  render: (page: string) => { html: string; styles: string }
}

const injectRender = (
  template: string,
  page: string,
  { render }: ServerEntry
) => {
  const { html, styles } = render(page)
  return template
    .replace('</head>', `${styles}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
  tag: 'meta',
  attrs,
  injectTo: 'head',
})

const pageMetadata = (title: string, url: string, description: string) => [
  { tag: 'title', children: title, injectTo: 'head' } as const,
  {
    tag: 'link',
    attrs: { rel: 'canonical', href: url },
    injectTo: 'head',
  } as const,
  meta({ name: 'description', content: description }),
]

const homeMetadata: HtmlTagDescriptor[] = [
  ...pageMetadata(profile.name, profile.url, profile.description),
  ...Object.entries(colors).map(([scheme, { background }]) =>
    meta({
      name: 'theme-color',
      media: `(prefers-color-scheme: ${scheme})`,
      content: background,
    })
  ),
  meta({ property: 'og:type', content: 'website' }),
  meta({ property: 'og:url', content: profile.url }),
  meta({ property: 'og:title', content: profile.name }),
  meta({ property: 'og:description', content: profile.description }),
  meta({ property: 'og:image', content: profile.url + OG_IMAGE.path }),
  meta({ property: 'og:image:width', content: String(OG_IMAGE.width) }),
  meta({ property: 'og:image:height', content: String(OG_IMAGE.height) }),
  meta({ property: 'og:image:alt', content: `${profile.name} portfolio` }),
  meta({ name: 'twitter:card', content: 'summary_large_image' }),
]

const cvMetadata: Record<string, HtmlTagDescriptor[]> = Object.fromEntries(
  cvList.map(cv => [
    `/${cv.page}`,
    pageMetadata(cv.title, profile.url + cv.page, cv.description),
  ])
)

const siteMetadata = (): Plugin => ({
  name: 'site-metadata',
  transformIndexHtml: (_, { path }) => cvMetadata[path] ?? homeMetadata,
})

const preloadFonts = (): Plugin => ({
  name: 'preload-fonts',
  transformIndexHtml: {
    order: 'post',
    handler: (_, { bundle }) =>
      Object.keys(bundle ?? {})
        .filter(file => LATIN_FONT.test(file))
        .map(file => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${file}`,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
          injectTo: 'head',
        })),
  },
})

const printPdf = async (
  url: string,
  setup?: (page: BrowserPage) => Promise<unknown>
) => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    await setup?.(page)
    await page.goto(url)
    await page.evaluate('document.fonts.ready')
    return await page.pdf({
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
    })
  } finally {
    await browser.close()
  }
}

const serveFrom = (outDir: string) => (page: BrowserPage) =>
  page.route('**/*', route =>
    route.fulfill({ path: outDir + new URL(route.request().url()).pathname })
  )

const prerender = async (builder: ViteBuilder) => {
  const { client, ssr } = builder.environments
  await rm(SSR_OUT_DIR, { recursive: true, force: true })
  await builder.build(client)
  await builder.build(ssr)

  const { outDir, assetsDir } = client.config.build
  await cp(`${SSR_OUT_DIR}/${assetsDir}`, `${outDir}/${assetsDir}`, {
    recursive: true,
  })

  const serverEntry: ServerEntry = await import(
    pathToFileURL(`${SSR_OUT_DIR}/entry-server.js`).href
  )
  for (const page of PAGES) {
    const file = `${outDir}/${page}`
    const template = await readFile(file, 'utf8')
    await writeFile(file, injectRender(template, page, serverEntry))
  }
  for (const cv of cvList) {
    const pdf = await printPdf(`${PRINT_ORIGIN}/${cv.page}`, serveFrom(outDir))
    await writeFile(`${outDir}/${cv.pdf}`, pdf)
  }
}

const renderOnRequest = (): Plugin => ({
  name: 'render-on-request',
  apply: 'serve',
  transformIndexHtml: async (template, { server, path }) =>
    injectRender(
      template,
      path.slice(1),
      (await server!.ssrLoadModule(`/${SSR_ENTRY}`)) as ServerEntry
    ),
  configureServer: server => {
    for (const cv of cvList) {
      server.middlewares.use(`/${cv.pdf}`, (_, res, next) => {
        const cvUrl = new URL(cv.page, server.resolvedUrls!.local[0]).href
        printPdf(cvUrl)
          .then(pdf => {
            res.setHeader('Content-Type', 'application/pdf')
            res.end(pdf)
          })
          .catch(next)
      })
    }
  },
  handleHotUpdate: ({ server }) => {
    server.ws.send({ type: 'full-reload' })
    return []
  },
})

export default defineConfig({
  plugins: [siteMetadata(), preloadFonts(), renderOnRequest()],
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: [...PAGES],
    },
  },
  builder: {
    buildApp: prerender,
  },
  environments: {
    ssr: {
      build: {
        ssr: SSR_ENTRY,
        outDir: SSR_OUT_DIR,
        emitAssets: true,
        copyPublicDir: false,
      },
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
})
