const puppeteer = require('puppeteer');

(async () => {
  // debug 模式，关闭无头模式
  // await puppeteer.launch({headless: false});
  const browse = await puppeteer.launch();
  const page = await browse.newPage();
  await page.goto('https://lxbird.com');
  await page.setViewport({ height: 1080, width: 1920 });
  await page.screenshot({ path: 'test.png' });
  await browse.close;
})();
