---
title: "HTTP with Node"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme : "night"
transition: "slide"
# highlightTheme: "monokai"
slideNumber: true
loop: true
# autoSlide: 5000 
# openButton: false
enableMenu: false
# controlsLayout: 'edges'
# controls: true
enableChalkboard: false
# enableTitleFooter: false
---

<style>
/* Remove the line */
.line.focus{background:none;font-size: xx-large;}

/* #logo { 
  position: initial !important;
  left: 0!important; 
  top: 0%!important; 
  text-align: center;
  padding-top:1em;

}
#logo > img {height: 10em; max-height: none;}

.slides{
}

.slides > section.present{
top: -20%!important;

} */

/* #logo {
    position: inherit!important;
    top: 0!important;
    left: 0!important;
    text-align: center;
}

body > div.reveal.slide.center.has-horizontal-slides.ready > div.slides > section.present{
  top:0!important;
} */
/* .p1{padding:1em; border:none} */
</style>



### When does node become a server?

Simplest explaination is when it is installed on a server. Another way to look at it is whenever we use a protocol like HTTP to between a client and a server.

---

### What is HTTP?

HyperText Transfer Protocol
* Used to send text-based files such as HTML, CSS, etc.
* Read about it on [wiki](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

---

### What is HTML?
* Stands for Hyper Text **Markup Language**
* It is NOT a programming language


```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style> /*Inline Styles Go Here*/ </style>
  <link rel="stylesheet" href="./style.css">
  <!-- HTML COMMENT -->
  <script src="./script.js"></script>
  <title>HTTP with Node</title>
  <!-- <link rel="icon" type="image/png" href="images/favicons/favicon.png"> -->
  </head>
  <body>
    <h1>Hello World</h1>
    <p>
      Here is a hyperlink to
       <a href="http://google.com">
       Google
       </a>
    </p>
  </body>
</html>
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}

Start the HTML tag and define the language {.fragment .current-only data-code-focus=2-2}

Close the html tage with  `</ html>`  {.fragment .current-only data-code-focus=22-22}

Start the `<head>` tag which contains everthing to be preloaded before the page. {.fragment .current-only data-code-focus=3-3}

This can include things like the meta tag. {.fragment .current-only data-code-focus=4-4}

Notice that it is self-closing?  `<meta />`  {.fragment .current-only data-code-focus=4-4}

This is for responsive websites. {.fragment .current-only data-code-focus=5-5}

This is for inline CSS {.fragment .current-only data-code-focus=6-6}

This is for linked CSS {.fragment .current-only data-code-focus=7-7}

This is an html comment and it does not render for the user. {.fragment .current-only data-code-focus=8-8}

Looks like the following: ![](./03-client-vs-server/titleMeta.png) {.fragment .current-only data-code-focus=10-10}

You can change that global icon to a custom "favicon" by updating the meta tag ![](./03-client-vs-server/titleMeta.png) {.fragment .current-only data-code-focus=11-11}

Now we close  `</head>` tag by adding the back `/`. {.fragment .current-only data-code-focus=12-12}

Inside the  `<body>` tag is our website **content**. {.fragment .current-only data-code-focus=13-21}

The  `<a>` tag is for **hyper links**. {.fragment .current-only data-code-focus=17-19}

The **URL** goes in `href=" "` . {.fragment .current-only data-code-focus=17-17}

The **Text** goes between the tags: `<a>` text `</a>` . {.fragment .current-only data-code-focus=18-18}

This goes back to **Hyper Text** Transfer Protocol (**HTTP**) {.fragment .current-only data-code-focus=17-17}

Congrats! 🎉🎉🎉🎉 You should now know *enough* HTML to get by with the rest of this lesson... {.fragment .current-only}

---



### How HTTP Protocol works


[![](03-client-vs-server/clientVSserver.png)]()

<!-- [![](https://raw.githubusercontent.com/HansUXdev/JavaScript-First/884d95cce59c213f6bb2af7e6d54977b7e06b048/01-JavaScript-Reintroduction/03-client-vs-server/clientVSserver.drawio.svg)]() -->

---

### Sending HTML with HTTP

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;
http.createServer(function (request, response) {
  if (request.url == '/') {
    fs.readFile('index.html', function(err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      return response.end();
    });
  }
  else{
    return response.end('Invalid request');
  }
}).listen(PORT);
```

Import / require node.js [API Modules](https://nodejs.org/docs/latest/api/). { .fragment .current-only data-code-focus=1-2}

This module creates the connection to our server and uses the http protocol. {.fragment .current-only data-code-focus=1-1}

This module is used to read files. {.fragment .current-only data-code-focus=2-2}

Creates a server and consumes port 7000. {.fragment .current-only data-code-focus=3-15}

If the **request** is localhost:7000/, then return a response with index.html {.fragment .current-only data-code-focus=5-11}

ELSE KILL the server, then return invalid response {.fragment .current-only data-code-focus=12-14}

Uses FS to read the the html file. {.fragment .current-only data-code-focus=6-6}

Inside the **callback**, define the correct **HTTP header** with the correct **content type**. {.fragment .current-only data-code-focus=7-7}

---

### Exercise 2: Dynamic Sites without Expess.js
* Believe it or not, you don't need EJS in 2020... 
* You may also not even need react... 😲

---

### Create a function that returns HTML
* Using Template Strings as a template engine...
* Simple enough to teach.
* Not secure enough for sales...

```javascript
const HtmlTemplateString = (header,body,footer) => {
  return `
  <!DOCTYPE html>
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
```

This function has 3 parameters, a header, a body and footer. {.fragment .current-only data-code-focus=1-1}

We can use this to pass in stylesheets, scripts, meta attributes, etc. {.fragment .current-only data-code-focus=8-8}

Here we pass in out page content. {.fragment .current-only data-code-focus=11-11}

Here we can include any copyrights, scripts, etc . {.fragment .current-only data-code-focus=12-12}

---

### HTTP With JavaScript ES6

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;

const HtmlTemplateString = (header,body,footer) => {/* Code from above */}
let page1 =HtmlTemplateString(
  `<title>Hello</title>`,
  `<h1>Hello World END</h1>`,
  `<footer> By Hans </footer>`)

(async () =>{ /* Server Code goes here */ })();

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
  }
).listen(PORT);
```

Have the server render the HTML. {.fragment .current-only data-code-focus=6-9}

We'll then wrap everything in an async **IIFE**. {.fragment .current-only data-code-focus=11-11}

We'll then wrap everything in an async **IIFE**. {.fragment .current-only data-code-focus=11-11}

---

### HTTP With JavaScript ES6

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;

const HtmlTemplateString = (header,body,footer) => {/* Code from above */}
let page1 =HtmlTemplateString(/* Same Code from above */)

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
    }
  ).listen(PORT);


```


---

### Check it the full book

By Hans McMurdy

