/**
 * SimpleExpress.js
 * @author Jane Smith <jsmith@example.com>
 * @file Demonstrates the use() method of Express.js 
 * @description SimpleExpress.js 
*/
const app = express()
const express = require('express')
const path = require('path');
const port = 3000


/**
 * @function HTML - returns a template that represents the final html output.
 * @param {string} header  - is intended to accept the client `<script>`, `<style>`, `<link>` or `<meta>` tags. 
 * @param {string} body - is intented to accept html as an arguement.
 * @param {string} footer  - is intended to accept the client `<script>` or any other html you would want at the end of your document.
 * @returns {string} - this should be proper html.
 * @example 
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./public/style.css">
</head>
<body>
  <h1>Hello World</h1>
  <script src="./public/alert.js"></script>
</body>
</html>
*/

const HTML = (header,body,footer) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${header}
  </head>
  <body>
  <h1>${body}</h1>
  ${footer}
  </body>
  </html>`;
}

/**
 * @function app.use - does shit
 */
app.use(
  '/public', // #1
   express.static(
     path.join(__dirname, 'public') // #3
  ) // #2
) 
app.get('/', (req, res) => {
  res.send(  
    HTML(
      `<link rel="stylesheet" href="/public/style.css">`,
      `<h1>HELLO</H1>`,
      `<script src="/public/alert.js"></script>`) 
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))