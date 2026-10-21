import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import App from './App'

export const render = () => {
  const cache = createCache({ key: 'css' })
  const emotionServer = createEmotionServer(cache)
  const html = renderToString(
    createElement(CacheProvider, { value: cache }, createElement(App))
  )
  const chunks = emotionServer.extractCriticalToChunks(html)
  return { html, styles: emotionServer.constructStyleTagsFromChunks(chunks) }
}
