/**
 * 1. Pass a video into the media file.
 * - https://www.pexels.com/videos/
 * 2. Use puppeteer to screen shot the video. 
 * 3. https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response
 */

let http = require('http')
const PORT = 7000;

const HTML =`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
  </head>
  <body>
  <h1>Hello World</h1>
  </body>
  </html>`;

http.createServer(
  (req,res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': HTML.length,
      'Expires': new Date().toUTCString()
    })
    res.end(HtmlTemplateString);
  }
).listen(PORT);


