import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services header menu', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1200 });
    await page.goto('https://www.epam.com/');

    await page.getByRole('link', { name: 'Services' }).nth(1).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page).toHaveURL(/\/services\/client-work/);
    await expect(
      page.getByRole('heading', { name: 'Client Work', level: 1 })
    ).toBeVisible();
  });
});
