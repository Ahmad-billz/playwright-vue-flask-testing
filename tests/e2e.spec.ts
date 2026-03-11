import { test, expect } from '@playwright/test';

test.describe('End to End Game Tests', () => {

  test('games page shows initial games', async ({ page }) => {

    await page.goto('/games');

    await expect(page.getByText('2k21')).toBeVisible();
    await expect(page.getByText('mario')).toBeVisible();
  });


  test('user can add a game', async ({ page }) => {

  await page.goto('/games');

  await page.getByPlaceholder('Enter Game Title').fill('Playwright Game');
  await page.getByPlaceholder('Enter Game Genre').fill('Testing');

  await page.getByRole('button', { name: 'Add Game' }).click();

  await expect(page.getByText('Playwright Game')).toBeVisible();
  });

});