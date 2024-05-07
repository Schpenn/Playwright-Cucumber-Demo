import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture  } from "./hooks/pageFixture";

Given('I navigate to the Website', async () =>{
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
});

Given('I type Access into the search bar', async () => {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.getByLabel('Search').click();
  await pageFixture.page.getByPlaceholder('Search docs').fill('Access');
});

Then('Link to Accessibility testing should be visible', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect(pageFixture.page.getByRole('link', { name: 'Accessibility testing', exact: true })).toBeVisible();
});

When('I click on Accessibility testing', async () => {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.getByRole('link', { name: 'Accessibility testing', exact: true }).click();
});

Then('the Accessibility testing page should be visible', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect(pageFixture.page).toHaveTitle(/Accessibility testing/);
});
