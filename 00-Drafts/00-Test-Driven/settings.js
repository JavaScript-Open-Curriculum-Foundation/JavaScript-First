let settings = {
  timeout: 0, 
  headless: false, 
  devtools: false,
  
  // Open with Chrome Browser
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // userDataDir: '/Users/user/Library/Application Support/Google/Chrome/Profile 4/',

  defaultViewport: {
    width: 1080,
    height: 800,
    deviceScaleFactor: 1,
  }
};

exports.default                 = settings;
exports.settings                = settings;