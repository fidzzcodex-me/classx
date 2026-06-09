const FidzzPuppeteer = require('./index');

async function main() {
  console.log('🚀 Launching browser...');
  const browser = await FidzzPuppeteer.launch({ 
    headless: true 
  });
  
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com');
  const title = await page.title();
  console.log('Page title:', title);
  
  // Screenshot example
  await page.screenshot({ path: 'example.png' });
  console.log('Screenshot saved!');
  
  await browser.close();
  console.log('✅ Done');
}

main().catch(console.error);
