const http = require('http')
const fs = require('fs');
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
  ${body}
  ${footer}
  </body>
  </html>`;
}
let page1 = HtmlTemplateString(`<title>Title</title>`,`<h1>Hello World END</h1>`,`<footer> Content about the </footer>`);

// let page1 =HtmlTemplateString(
//   `<title>Hello</title>`,
//   `<h1>Hello World END</h1>
//   <div>Content about the world</div>`,
//   `<footer> By Hans </footer>`)

http.createServer(
  (request,res)=>{
    if (request.url == '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': page1.length,
        // 'Expires': new Date().toUTCString()
      })
      res.end(page1);
    }
  }
).listen(PORT);