import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

const colorSchemeScript = (): Plugin => ({
  name: 'color-scheme-script',
  transformIndexHtml: html =>
    html.replace(
      '<head>',
      `<head>${renderToStaticMarkup(createElement(InitColorSchemeScript, { attribute: 'class' }))}`
    ),
})

export default defineConfig({
  plugins: [react(), colorSchemeScript()],
})
