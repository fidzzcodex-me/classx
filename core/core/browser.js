const { chromium } = require('playwright');

async function launchBrowser(options = {}) {
  const defaultOptions = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  };

  const launchOptions = { ...defaultOptions, ...options };
  
  const browser = await chromium.launch(launchOptions);
  return browser;
}

module.exports = { launchBrowser };
