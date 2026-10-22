import { createElement, type ReactElement } from 'react'
import { renderToString } from 'react-dom/server'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import App from './App'
import Cv from './components/Cv'
import { cvs } from './data/cvContent'

const pages: Record<string, ReactElement> = {
  'index.html': createElement(App),
  ...Object.fromEntries(cvs.map(cv => [cv.page, createElement(Cv, { cv })])),
}

export const render = (page: string) => {
  const cache = createCache({ key: 'css' })
  const emotionServer = createEmotionServer(cache)
  const html = renderToString(
    createElement(CacheProvider, { value: cache }, pages[page])
  )
  const chunks = emotionServer.extractCriticalToChunks(html)
  return { html, styles: emotionServer.constructStyleTagsFromChunks(chunks) }
}
