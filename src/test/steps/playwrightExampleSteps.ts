import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture  } from "../../hooks/pageFixture";

Given('I navigate to the Website', async () =>{
   // browser = await chromium.launch({headless:false});
    //page = await browser.newPage();
    await pageFixture.page.goto('https://playwright.dev/');
  });

Then('the website should have Playwright in the title', async () => {
  await expect(pageFixture.page).toHaveTitle(/Playwright/);
});

When('I click on the link Get started', async () => {
    await pageFixture.page.getByRole('link', { name: 'Get started' }).click();
});

Then('The heading Installation should be visible', async () =>{
    await expect(pageFixture.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})