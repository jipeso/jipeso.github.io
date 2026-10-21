import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Response } from '@playwright/test'
import { profile } from '../src/data/profile'
import { sectionTitles } from '../src/data/sections'
import { colors } from '../src/theme'

const COLOR_SCHEMES = ['light', 'dark'] as const
const MAX_JAVASCRIPT_BYTES = 2048

const toRgb = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16))
  return `rgb(${r}, ${g}, ${b})`
}

test('loads without errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text())
  })

  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(profile.name)
  expect(errors).toEqual([])
})

test('loads every image', async ({ page }) => {
  const failed: string[] = []
  page.on('response', response => {
    if (!response.ok()) failed.push(`${response.status()} ${response.url()}`)
  })

  await page.goto('/')
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect(image).toHaveJSProperty('complete', true)
    expect(
      await image.evaluate(img => (img as HTMLImageElement).naturalWidth)
    ).toBeGreaterThan(0)
  }
  await page.waitForLoadState('networkidle')

  expect(failed).toEqual([])
})

test('ships almost no JavaScript', async ({ page }) => {
  const responses: Response[] = []
  page.on('response', response => responses.push(response))

  await page.goto('/')
  await page.waitForLoadState('networkidle')

  const scripts = responses.filter(
    response => response.request().resourceType() === 'script'
  )
  const sizes = await Promise.all(
    scripts.map(async script => (await script.body()).length)
  )
  expect(sizes.reduce((total, size) => total + size, 0)).toBeLessThan(
    MAX_JAVASCRIPT_BYTES
  )
})

for (const colorScheme of COLOR_SCHEMES) {
  test(`has no accessibility violations in ${colorScheme} mode`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme })
    await page.goto('/')

    const { violations } = await new AxeBuilder({ page }).analyze()

    expect(
      violations.map(({ id, nodes }) => ({
        id,
        targets: nodes.map(node => node.target.join(' ')),
      }))
    ).toEqual([])
  })
}

for (const colorScheme of COLOR_SCHEMES) {
  test(`follows the system ${colorScheme} color scheme`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await page.goto('/')

    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      toRgb(colors[colorScheme].background)
    )
  })
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  test('serves the styled content', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      profile.name
    )
    for (const title of Object.values(sectionTitles)) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible()
    }
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      toRgb(colors.dark.background)
    )
  })
})

test('shows a focus outline when navigating by keyboard', async ({ page }) => {
  await page.goto('/')

  await page.keyboard.press('Tab')

  await expect(page.getByRole('link', { name: 'GitHub' })).toBeFocused()
  await expect(page.getByRole('link', { name: 'GitHub' })).toHaveCSS(
    'outline-style',
    'solid'
  )
})

test('shows a tooltip when hovering a social link', async ({ page }) => {
  await page.goto('/')
  const github = page.getByRole('link', { name: 'GitHub' })

  await github.hover()

  await expect
    .poll(() =>
      github.evaluate(link => getComputedStyle(link, '::after').opacity)
    )
    .toBe('1')
})

test('copies the email address', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')

  await page.getByRole('button', { name: 'Copy email' }).click()

  await expect(page.getByRole('button', { name: 'Email copied' })).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    profile.email
  )
  await expect(page.getByRole('button', { name: 'Copy email' })).toBeVisible()
})
