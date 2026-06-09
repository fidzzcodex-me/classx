# core

**Lightweight Puppeteer alternative** using Playwright. 
Super ringan, cocok buat Pterodactyl Docker, bot automation, scraping, dll.

## Install
```bash
cd /home/container  # atau root project lo
npm install playwright
```

## Usage Basic
```js
const core = require('./core');

async function main() {
  const browser = await core.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'test.png' });
  
  await browser.close();
}

main().catch(console.error);
```

## API Mirip Puppeteer
- `core.launch(options)`
- `browser.newPage()`
- `page.goto(url)`
- `page.screenshot()`
- `page.evaluate()`
- `page.click()`, `page.type()`, dll.

Full Playwright power di baliknya, tapi API simple seperti Puppeteer.

**Optimized for your Pterodactyl panels.**

Made with 🔥 by Fidzz
