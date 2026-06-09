const playwright = require('playwright');

async function launchBrowser(options = {}) {
  const { headless = true, args = [], ...rest } = options;
  
  const browser = await playwright.chromium.launch({
    headless,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
      ...args
    ],
    ...rest
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
  });

  return {
    newPage: async () => {
      const page = await context.newPage();
      // Add stealth
      await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
      });
      return page;
    },
    close: async () => await browser.close(),
    version: async () => await browser.version()
  };
}

module.exports = { launchBrowser };
