let http = require('http')
const PORT = 7000;

const HtmlTemplateString = (header,body,footer) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${header}
  </head>
  <body>
  <h1>${body}</h1>
  ${footer}
  </body>
  </html>`;
}
let page1 =HtmlTemplateString(
  `<title>Hello</title>`,
  `<h1>Hello World END</h1>`,
  `<footer> By Hans </footer>`)

http.createServer(
  (request,res)=>{
    if (request.url == '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': page1.length,
        'Expires': new Date().toUTCString()
      })
      res.end(page1);
    }
    else {
      return response.end('Invalid request');
    }
  }
).listen(PORT);


