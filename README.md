# core

Lightweight browser automation library mirip Puppeteer tapi pakai Playwright. Sangat ringan dan dioptimasi khusus untuk **Pterodactyl Docker**.

## Install

```bash
npm install core
# atau local
npm install
```

## Usage

```js
const core = require('core');

async function main() {
  const browser = await core.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  
  await browser.close();
}

main().catch(console.error);
```

## Fitur
- Full Puppeteer-style API
- `--no-sandbox` ready untuk Pterodactyl
- Stealth dasar (anti-detect)
- Ringan & stabil di container
- Support proxy, userAgent, viewport custom

## Pterodactyl Tips
Tambahkan di startup command:
```bash
npm install && node yourbot.js
```

Compatible dengan Puppeteer yang sudah terinstall (tidak konflik).