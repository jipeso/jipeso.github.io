import '@fontsource/instrument-sans/400.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/bricolage-grotesque/700.css'

const COPIED_DURATION_MS = 1500

for (const button of document.querySelectorAll<HTMLElement>('[data-copy]')) {
  const label = button.getAttribute('aria-label') ?? ''
  let resetTimeout: number | undefined

  const reset = () => {
    delete button.dataset.copied
    button.setAttribute('aria-label', label)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? '')
    } catch {
      return
    }
    button.dataset.copied = ''
    button.setAttribute('aria-label', button.dataset.copiedLabel ?? label)
    clearTimeout(resetTimeout)
    resetTimeout = window.setTimeout(reset, COPIED_DURATION_MS)
  }

  button.addEventListener('click', () => void copy())
}
