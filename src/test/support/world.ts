import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
  browser: Browser | null = null;
  context: BrowserContext | null = null;
  page: Page | null = null;

  async openBrowser(browserType: string) {
    switch (browserType) {
      case 'chromium':
        this.browser = await chromium.launch();
        break;
      case 'firefox':
        this.browser = await firefox.launch();
        break;
      case 'webkit':
        this.browser = await webkit.launch();
        break;
      default:
        throw new Error(`Unsupported browser: ${browserType}`);
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
