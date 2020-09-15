---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "HTTP with Node"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: true
loop: true
autoSlide: 5000 
# openButton: false
enableMenu: false
# controlsLayout: 'edges'
# controls: true
enableChalkboard: false
# enableTitleFooter: false
autoSlideStoppable: true
---

<style>
/* Remove the background color and make mongo commands more visible by adding color */
.line.focus{background:none;font-size: xx-large;color: #5cc4ea;}



</style>



### What is HTTP?

HyperText Transfer Protocol

* Used to send text-based files such as HTML, CSS, etc.
* Read about it on [wiki](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

--

### How HTTP Protocol works
The communication protocol between clients and servers.

Read the official [MDN docs about it](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) {.fragment }

<p align="center">
  <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/4a53874240438a3fdb6550c406524974941f9f6b/01-Reteaching-JavaScript/04-client-vs-server/imgs/http-01.drawio.svg" height="300px" alt="HTTP Protocol"/>
</p>

:::block
**Browser** makes a ...{.fragment }

**Request** to the ... { .fragment }

{style=width:50%;float:left; height:50%}
:::

:::block
**Server** which then sends a ...{ .fragment }

**Response** ... back to the client{ .fragment }

{style=width:50%;float:right; height:50%}
:::


--

### Client Request

When we hit enter on a URL ![](/02-HTTP/URL.png) .. {.fragment}

<p align="center">
  <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/4a53874240438a3fdb6550c406524974941f9f6b/01-Reteaching-JavaScript/04-client-vs-server/imgs/http-02.drawio.svg" height="300px" alt="HTTP Protocol"/>
</p>


The client (browser) makes an HTTP **request** to **GET** the website's resources, such as HTML, CSS, JavaScript, images, etc... {.fragment}



--

### Server Response
This where the server, **responds** to the request and sends them the resource they want to *get* such as a **text file** such as HTML, CSS, or even images. {.fragment }
<p align="center">
  <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/4a53874240438a3fdb6550c406524974941f9f6b/01-Reteaching-JavaScript/04-client-vs-server/imgs/http-03.drawio.svg" height="400px" alt="HTTP Protocol"/>
</p>

The **browser** then *reads* that file and presents it to the user according the specified **Content-Type**, such as text/html. {.fragment }

--

### HTTP Status Codes 
#### with CATS..

Credit to [http.cat](https://http.cat/).

:::block

<p align="center">
  <img src="http://g.recordit.co/upgfpUOSvg.gif" height="400px" alt="HTTP Protocol"/>
</p>

{style=width:60%;float:left;}
:::

:::block
**1xx** codes are informational ...{ .fragment }

**2xx** ... sucesses ! 🎉 { .fragment }

**3xx** ... redirection... { .fragment }

**4xx** ... client error...{ .fragment }

**5xx** ... server error...{ .fragment }

{style=width:40%;float:right;}
:::



--

<!-- What level is their knowledge at?: remember, understand, apply, analyze, evaluate, create : -->
<!-- Help: Explain HTTP Topic: Verbs -->
<!-- Help them:  HTTP VERBS -->

### HTTP VERBS 

<!-- Prime them for the concept of CRUD  -->
 
**GET** refers to *requests* made to *read* data. {.fragment }

**POST** refers to *requests* made to *create* data on a server. {.fragment }
<!-- made to submit data to server, resulting in change of state or side effects on server. -->

**UPDATE** refers to *requests* made to *update* data. {.fragment }

**DELETE** refers to *requests* made to *deletes* data. {.fragment }

---

### Exercise 1: Your first HTML file...

Inside `0-student_files/index.html` type the following HTML.

--

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
    <h1 style="text-align:center">Hello World</h1>
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

### Node.js is ...

NOT server! {.fragment .current-only }

It is JavaScript RUNTIME Environment! {.fragment .current-only }

It has an HTTP method as part of it's core API that allows it to be used on servers such as... {.fragment}
* Apache {.fragment}
* NGIX {.fragment}
* etc {.fragment}

---

### Exercise 2: 
#### Sending HTML with HTTP

Step 1: Create a file called `simpleHTTP.js` { .fragment .current-only}

Now, we'll use node.js's built-in API [http method](https://nodejs.org/api/http.html) to handle the requests and the response data. { .fragment .current-only}

Step 2: Type the following code into `simpleHTTP.js` { .fragment .current-only}

<!-- TEACHER SHOULD:  PROMPT The Readers/Students to type this out -->
--

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

### Exercise 3: 
#### Dynamic Sites without Expess.js
* Believe it or not, you don't need EJS in 2020... 
* You may also not even need react... 😲

---

### Create a function that returns HTML
:::block

* Using Template Strings as a template engine...
* Simple enough to teach.
* Not secure enough for sales...

{.fragment .current-only}
:::

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

### Using HtmlTemplateString() to create a layout

```javascript
const http = require('http')
const fs = require('fs');
const PORT = 7000;

const HtmlTemplateString = (header,body,footer) => {/* Code from above */}
let page1 =HtmlTemplateString(
  `<title>Hello</title>`,
  `<h1>Hello World END</h1>
  <div>Content about the world</div>`,
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
  }
).listen(PORT);
```

Store the final result of the HTML layout as string assigned to `page1`. {.fragment .current-only data-code-focus=6-10}

The **header** should have a title of "Hello". {.fragment .current-only data-code-focus=7-7}

The **body** should should say "Hello". {.fragment .current-only data-code-focus=8-9}

The **footer** should should say "By" and **your name** and wrapped in a `<footer>` tag. {.fragment .current-only data-code-focus=10-10}

Set the page content-length. {.fragment .current-only data-code-focus=17-17}

Send it. {.fragment .current-only data-code-focus=20-20}


---

### Thank You for reading...

If you liked this you can always read more on github by clicking the image below...

<!-- <p align="center">
  <a href="https://github.com/HansUXdev/JavaScript-First">
    <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg" height="300px" alt="HTTP Protocol"/>
  </a>
</p> -->

You can view more content here:

<a href="https://medium.com/@hansOnConsult" class="MEDIUM">
   <img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" />
</a>
<a href="https://dev.to/hansuxdev" class="DEV TO">
   <img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" />
</a>
<a href="https://www.youtube.com/channel/UCCGfELkPCJg1XHxQfFFz7pw/about" class="YOUTUBE">
   <img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" />
</a>

<a href="https://www.youtube.com/channel/UCCGfELkPCJg1XHxQfFFz7pw/about" class="Twitch">
   <img src="https://img.shields.io/twitch/status/hansoncoding?style=for-the-badge" />
</a>

---

### Check it the full book online

* If you liked this content, consider giving it a star on github <a class="github-button" href="https://github.com/HansUXdev/JavaScript-First" data-icon="octicon-star" data-size="large" aria-label="Star HansUXdev/JavaScript-First on GitHub">Star</a>


* Otherwise consider become a github sponsor 
<a class="github-button" href="https://github.com/sponsors/HansUXdev" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @HansUXdev on GitHub">Sponsor</a>

<script async defer src="https://buttons.github.io/buttons.js"></script>