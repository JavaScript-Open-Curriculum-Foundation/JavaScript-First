/**
 * 1. Pass a video into the media file.
 * - https://www.pexels.com/videos/
 * 2. Use puppeteer to screen shot the video. 
*/

// import http from 'http';
const http = require('http')
const fs = require('fs');

var htmlFile;
var cssFile;
const PORT = 7000;




let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/css/style.css">

  <script src="/js/alert.js"></script>
</head>
<body>
<h1>Hello</h1>
</body>
</html>`;


var server = http.createServer(
  function (request, response) {
    if(err) console.log(err), response.writeHead(404, "Not Found"), response.end();
    switch (request.url) {
      case "/js/alert.js":
            response.writeHead(200, {"Content-Type": "text/javascript"});
            response.write(jsFile);
            break;
      case "./css/style.css":
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(cssFile);
            break;
      default:    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
    }
    response.end();
  }
);
server.listen(PORT);


