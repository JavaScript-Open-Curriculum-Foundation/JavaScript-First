const path = require('path');
const express = require('express')
const app = express()
const port = 3000

const reactTemplate = (header,body,footer) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${header}
    <!-- Example: <link rel="stylesheet" href="/public/style.css"> -->
  </head>
  <body>
  <div id="root"></div>
  ${body}
  ${footer}
  </body>
  </html>`;
}

app.use('/components', express.static(path.join(__dirname, 'components')))

app.get('/', (req, res) => {
  res.send(  
    reactTemplate(
      ``,
      `<div id="root"></div>`,
      `<script src="./components/output/index.js"></script>`
      ) 
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))