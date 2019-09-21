const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/imghp?hl=en');

  await page.setViewport({
    width: 1920,
    height: 1080
  });

  console.log('reset viewport');

  await page.focus('input[role=combobox]');
  await page.keyboard.sendCharacter('狗');
  await page.click('button[type=submit]');
  console.log('go to search list');

  page.on('load', async () => {
    console.log('page loading done, start fetch...');

    const srcs = await page.evaluate(() => {
      let images = document.querySelectorAll('img');
      return Array.prototype.map.call(images, (img) => img.src && img.src);
    });

    console.log(`get ${srcs.length} images, start download`);
  });
})();
