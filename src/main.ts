import './fonts.css'

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

for (const carousel of document.querySelectorAll<HTMLElement>(
  '[data-carousel]'
)) {
  const track = carousel.querySelector<HTMLElement>('[data-carousel-track]')!
  const controls = carousel.querySelector<HTMLElement>(
    '[data-carousel-controls]'
  )!
  const previous = carousel.querySelector<HTMLButtonElement>(
    '[data-carousel-previous]'
  )!
  const next = carousel.querySelector<HTMLButtonElement>(
    '[data-carousel-next]'
  )!
  const status = carousel.querySelector<HTMLElement>('[data-carousel-status]')!
  const count = track.children.length

  const update = () => {
    const index = Math.round(track.scrollLeft / track.clientWidth)
    previous.disabled = index === 0
    next.disabled = index === count - 1
    status.textContent = `${index + 1} / ${count}`
  }

  previous.addEventListener('click', () =>
    track.scrollBy({ left: -track.clientWidth })
  )
  next.addEventListener('click', () =>
    track.scrollBy({ left: track.clientWidth })
  )
  track.addEventListener('scroll', update)
  controls.hidden = false
  update()
}
