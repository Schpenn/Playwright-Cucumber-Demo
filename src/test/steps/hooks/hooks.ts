import { Before, AfterStep, After, Status } from "@cucumber/cucumber";
import { chromium,  Browser, Page } from "playwright";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;

Before(async function () {
    browser = await chromium.launch({headless: true});
    page = await browser.newPage();
    pageFixture.page = page; 
});

//Tar screenshot av hvert steg:
/* AfterStep(async function (step) {
    const screenshot = await page.screenshot();
    this.attach(screenshot, 'image/png');
  });
 */
After(async function () {
    After(async function (scenario) {
        if (scenario.result?.status === Status.FAILED) {
          const screenshot = await this.page.screenshot();
          this.attach(screenshot, 'image/png');
        }
        await browser.close();
      });
});