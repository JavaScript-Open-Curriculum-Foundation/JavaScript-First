
const puppeteer = require('puppeteer')
const delaySecond = async (time) => await new Promise(res => setTimeout(res, 1000 * time));

describe('Open the website in Chrome, FireFox and Chrome-Edge', () => {
  test('Should open a website with FIREFOX', async () => {
    let FIREsettings = {
      headless: false,
      ignoreHTTPSErrors: true, 
      acceptInsecureCerts: true, 
      product: 'firefox',
      // executablePath:'/Applications/Firefox.app/Contents/MacOS/firefox',
      args: ['--proxy-bypass-list=*', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-first-run', '--no-sandbox', '--no-zygote', '--single-process', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list', '--enable-features=NetworkService']
    }
    let browser = await puppeteer.launch(FIREsettings)
    let page = await browser.newPage()
    try {
      await page.goto("https://google.com")
      await page.screenshot({
        path: './Browsers/FIRE.png',
        fullPage: true
      })
      let img = await page.waitForSelector('#hplogo')
    } 
    catch (error) {
      console.error(`FIRE`,error)
    }
    await delaySecond(100)
    await browser.close();
    
  })
})