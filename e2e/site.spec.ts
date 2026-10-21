import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { profile } from '../src/data/profile'

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

for (const colorScheme of ['light', 'dark'] as const) {
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

test('navigates to a section', async ({ page, isMobile }) => {
  await page.goto('/')

  if (isMobile) {
    await page.getByRole('button', { name: 'open navigation menu' }).click()
  }
  await page.getByRole('link', { name: 'Projects', exact: true }).click()

  await expect(page).toHaveURL(/#projects$/)
  await expect(
    page.getByRole('heading', { name: 'Featured projects' })
  ).toBeInViewport()
})

test('remembers the chosen color scheme', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')

  await page.getByRole('button', { name: 'switch to light mode' }).click()
  await expect(page.locator('html')).toHaveClass('light')

  await page.reload()
  await expect(page.locator('html')).toHaveClass('light')
  await expect(
    page.getByRole('button', { name: 'switch to dark mode' })
  ).toBeVisible()
})

test('copies the email address', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')

  await page.getByRole('button', { name: 'Copy email' }).click()

  await expect(page.getByRole('button', { name: 'Email copied' })).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    profile.email
  )
})
