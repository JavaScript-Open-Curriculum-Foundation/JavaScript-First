/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */
const puppeteer = require('puppeteer')


// the site you want a styleguide for
const URL = "https://google.com/";

const delaySecond = async (time) => await new Promise(res => setTimeout(res, 1000 * time));


const headless =  true;

const defaultViewport = {
  width: 1080,
  height: 800,
  deviceScaleFactor: 1,
}

let chromeSettings = {
  timeout: 0, 
  headless: headless, 
  devtools: false,
  
  // if this is different on your machine, goto chrome://version/ and find the path.
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  defaultViewport: defaultViewport
};

let edgeSettings = {
  timeout: 0, 
  headless: headless, 
  devtools: false,
  // if this is different on your machine, goto edge://version/ and find the path.
  // executablePath: 'C:\\Users\\joe\\AppData\\Local\\Microsoft\\Edge SxS\\Application\\msedge.exe'
  executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  defaultViewport: defaultViewport
};

let fireSettings = {
  args: [ 
    '--ignore-certificate-errors',
    '--enable-features=NetworkService',
  ],
  product: 'firefox',
  // executablePath:'/Applications/Firefox.app/Contents/MacOS/firefox',
  // executablePath: "C:\\Program Files\\Mozilla Firefox\\firefox.exe
  // executablePath: 'C:\\Users\\joe\\AppData\\Local\\Microsoft\\Edge SxS\\Application\\msedge.exe',
  timeout: 0, 
  headless: headless, 
  devtools: false,
  defaultViewport: defaultViewport
};



beforeAll(async () => {
  // chrome = await puppeteer.launch(chromeSettings)
  // chrome_page = await chrome.newPage()

  // edge = await puppeteer.launch(edgeSettings)
  // edge_page = await edge.newPage()

  // firefox = puppeteer.launch(fireSettings) 
  // fire_page = await firefox.newPage()
})

describe('Open the website in Chrome, FireFox and Chrome-Edge', () => {

  test('Should open a website with chrome', async () => {
    let browser = await puppeteer.launch(chromeSettings)
    try { 
      let page = await browser.newPage()
      let site = await page.goto(URL)
      let screenshot = await page.screenshot({
        path: './Browsers/Chrome.png',
        fullPage: true
      })
      let img = await page.waitForSelector('#hplogo')

      // await Promise.all([browser,page,site,screenshot,img]);
      expect(img).toBeTruthy()

    } catch (error) {
      console.error(`Chrome`,error)
      return Promise.reject(error);
    }
    await browser.close();
  }, 10000)

  test('Should open a website with chrome-EDGE', async () => {
    let browser = await puppeteer.launch(edgeSettings)
    try {
      let page = await browser.newPage()
      let site = await page.goto(URL)
      let screenshot = await page.screenshot({
        path: './Browsers/Edge.png',
        fullPage: true
      })
      // Download btn should appear
      let img = await page.waitForSelector('#hplogo')
      // const downloadBTN = await page.$(downloadSelector)
      expect(img).toBeTruthy()
    } catch (error) {
      console.error(`EDGE`,error)
      return Promise.reject(error);
    }
    await browser.close()
  }, 10000)




  afterAll(async () => {
    // await browser.close()
  })
})