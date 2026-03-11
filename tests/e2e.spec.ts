import { test, expect } from '@playwright/test';

test.describe('End to End Game Tests', () => {

  test('games page shows initial games', async ({ page }) => {

    await page.goto('/games');
    await expect(page.getByText('2k21')).toBeVisible();
    await expect(page.getByText('mario')).toBeVisible();
  });


  test('user can add a game', async ({ page }) => {

  await page.goto('/games');

  await page.getByRole('button', { name: 'Add Game' }).click();
  await page.getByRole('textbox', { name: 'Title:' }).fill('Call of Duty');
  await page.getByRole('textbox', { name: 'Genre:' }).fill('Action');
  await page.getByText('Played?').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Game added')).toBeVisible();
  await expect(page.getByText('Call of Duty')).toBeVisible();
  });

});