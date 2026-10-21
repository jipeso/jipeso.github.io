import { defineConfig } from 'vitest/config'
import { type HtmlTagDescriptor, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { profile } from './src/data/profile'
import { colors } from './src/theme'

const OG_IMAGE = { path: 'og-image.png', width: 1200, height: 630 }

const colorSchemeScript = (): Plugin => ({
  name: 'color-scheme-script',
  transformIndexHtml: html =>
    html.replace(
      '<head>',
      `<head>${renderToStaticMarkup(createElement(InitColorSchemeScript, { attribute: 'class' }))}`
    ),
})

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

export default defineConfig({
  plugins: [react(), colorSchemeScript(), siteMetadata()],
  test: {
    include: ['src/**/*.test.ts'],
  },
})
