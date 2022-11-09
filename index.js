const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://google.ca');
    await page.screenshot({path: 'google.jpeg'});
    await page.type(".gLFyf","test");
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.click('.tF2Cxc');
  })();