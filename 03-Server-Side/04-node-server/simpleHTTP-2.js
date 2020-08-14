/**
 * 1. Pass a video into the media file.
 * - https://www.pexels.com/videos/
 * 2. Use puppeteer to screen shot the video. 
 */

// import http from 'http';
let http = require('http')
const fs = require('fs');

const PORT = 7000;



let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h1>Hello</h1>
</body>
</html>`;

var server = http.createServer(function (request, response) {
  fs.readFile('./' + request.url, function(err, data) {
      if (!err) {
          var dotoffset = request.url.lastIndexOf('.');
          var mimetype = dotoffset == -1
                          ? 'text/plain'
                          : {
                              '.html' : 'text/html',
                              '.ico' : 'image/x-icon',
                              '.jpg' : 'image/jpeg',
                              '.png' : 'image/png',
                              '.gif' : 'image/gif',
                              '.css' : 'text/css',
                              '.js' : 'text/javascript'
                              }[ request.url.substr(dotoffset) ];
          response.setHeader('Content-type' , mimetype);
          response.end(data);
          console.log( request.url, mimetype );
      } else {
          console.log ('file not found: ' + request.url);
          response.writeHead(404, "Not Found");
          response.end();
      }
  });
})  
server.listen(PORT);


