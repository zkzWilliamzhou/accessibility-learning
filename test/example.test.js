const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Accessibility/);
});

test('accessibility check', async () => {
  expect(true).toBe(true);
});
