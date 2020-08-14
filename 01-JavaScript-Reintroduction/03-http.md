---
theme : "night"
transition: "slide"
highlightTheme: "dracula"
slideNumber: true
title: "Primitive Data Types"
---


### Send HTML

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(PORT);
```

Import / require node.js API Modules. {.fragment .current-only data-code-focus=1-2}

This module creates the connection to our server and uses the http protocol. {.fragment .current-only data-code-focus=1-1}

This is a null. {.fragment .current-only data-code-focus=2-2}

This is a String. {.fragment .current-only data-code-focus=3-3}

This is a Number. {.fragment .current-only data-code-focus=4-4}

This is a Boolean. {.fragment .current-only data-code-focus=5-5}

This is a Symbol. {.fragment .current-only data-code-focus=6-6}

This is a BitInt. {.fragment .current-only data-code-focus=7-7}

---

### Primitive Types

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;

const html = (body,footer) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/public/style.css">
    <style>
      h1{ color: red; }
    </style>
  </head>
  <body>
  <h1>${body}</h1>
  ${footer}
  </body>
  </html>`;
}

http.createServer(
  (req,res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
      'Expires': new Date().toUTCString()
    })
    res.end(
      html(
        `<h1>HELLO</H1>`,
        `<script> alert('hi') </script>`
      ) 
    );
  }
).listen(PORT);
```

This is undefined. {.fragment .current-only data-code-focus=1-1}

This is a null. {.fragment .current-only data-code-focus=2-2}

This is a String. {.fragment .current-only data-code-focus=3-3}

This is a Number. {.fragment .current-only data-code-focus=4-4}

This is a Boolean. {.fragment .current-only data-code-focus=5-5}

This is a Symbol. {.fragment .current-only data-code-focus=6-6}

This is a BitInt. {.fragment .current-only data-code-focus=7-7}