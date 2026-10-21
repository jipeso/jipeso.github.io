import { cp, readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { defineConfig } from 'vitest/config'
import { type HtmlTagDescriptor, type Plugin, type ViteBuilder } from 'vite'
import { profile } from './src/data/profile.ts'
import { colors } from './src/theme.ts'

const OG_IMAGE = { path: 'og-image.png', width: 1200, height: 630 }
const SSR_ENTRY = 'src/entry-server.ts'
const SSR_OUT_DIR = 'node_modules/.tmp/ssr'

interface ServerEntry {
  render: () => { html: string; styles: string }
}

const injectRender = (template: string, { render }: ServerEntry) => {
  const { html, styles } = render()
  return template
    .replace('</head>', `${styles}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
  tag: 'meta',
  attrs,
  injectTo: 'head',
})

const siteMetadata = (): Plugin => ({
  name: 'site-metadata',
  transformIndexHtml: () => [
    { tag: 'title', children: profile.name, injectTo: 'head' },
    {
      tag: 'link',
      attrs: { rel: 'canonical', href: profile.url },
      injectTo: 'head',
    },
    meta({ name: 'description', content: profile.description }),
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
  ],
})

const prerender = async (builder: ViteBuilder) => {
  const { client, ssr } = builder.environments
  await rm(SSR_OUT_DIR, { recursive: true, force: true })
  await builder.build(client)
  await builder.build(ssr)

  const { outDir, assetsDir } = client.config.build
  await cp(`${SSR_OUT_DIR}/${assetsDir}`, `${outDir}/${assetsDir}`, {
    recursive: true,
  })

  const indexHtml = `${outDir}/index.html`
  const serverEntry = pathToFileURL(`${SSR_OUT_DIR}/entry-server.js`).href
  const template = await readFile(indexHtml, 'utf8')
  await writeFile(indexHtml, injectRender(template, await import(serverEntry)))
}

const renderOnRequest = (): Plugin => ({
  name: 'render-on-request',
  apply: 'serve',
  transformIndexHtml: async (template, { server }) =>
    injectRender(
      template,
      (await server!.ssrLoadModule(`/${SSR_ENTRY}`)) as ServerEntry
    ),
  handleHotUpdate: ({ server }) => {
    server.ws.send({ type: 'full-reload' })
    return []
  },
})

export default defineConfig({
  plugins: [siteMetadata(), renderOnRequest()],
  build: {
    assetsInlineLimit: 0,
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
