import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.vg.no/');
  await page.frameLocator('iframe[title="SP Consent Message"]').getByRole('img', { name: 'VG logo' }).click();
});