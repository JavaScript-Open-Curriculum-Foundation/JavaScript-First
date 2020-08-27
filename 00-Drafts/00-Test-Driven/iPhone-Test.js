/**
 * This script should go to style
 */
const puppeteer = require('puppeteer')
const iPhone = puppeteer.devices['iPhone 8'];

let settings = {

  timeout: 0, 
  headless: true, 
  devtools: false,

  defaultViewport: {
    width: 1080,
    height: 800,
    deviceScaleFactor: 1,
  }
};

(async () => {
  const browser = await puppeteer.launch(settings)
  const page = await browser.newPage()
  await page.emulate(iPhone)
  await page.goto('https://google.com/')
  await page.screenshot({
    path: './iphone/iphone-6.png',
    fullPage: true
  })
  console.log(await page.title())
  await browser.close()
})()