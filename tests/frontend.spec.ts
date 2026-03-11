import { test, expect } from '@playwright/test';

test.describe('Vue frontend tests', () => {
  test('homepage redirects to games page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/games$/);
  });

  test('games page loads', async ({ page }) => {
    await page.goto('/games');
    await expect(page.locator('body')).toBeVisible();
  });

  test('shark page loads', async ({ page }) => {
    await page.goto('/shark');
    await expect(page.locator('body')).toBeVisible();
  });
});