---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "HTTPS with Node"
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


<link rel="stylesheet" href="https://hansmcmurdy.com/JavaScript-First/theme.css"></link>


### What does the "S" in HTTPS mean?

It stands for Hypertext Transfer Protocol **Secure** {.fragment .current-only  }

Websites without it should are also demoted in **search engine optiminatization SEO** {.fragment .current-only  }



---



---


### Creating keys, certificates and decrypting them 
 
:::block
```bash
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
``` 
{.fragment}
:::

![](https://user-images.githubusercontent.com/5007073/91366577-fc3bd600-e7b8-11ea-8ff4-316ef3644665.png) {.fragment}

I used the term, "open" {.fragement}


---

### decrypted keys
 
```bash
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
```

---



### Creating a HTTPS server with Express 

 
```javascript
const fs = require('fs');
const KEY = fs.readFileSync('./key.pem');
const CERT = fs.readFileSync('./cert.pem');
const PORT = 8080;
const https = require('https');
const express = require('express');
const app = express();

const server = https.createServer(
  {
    key: KEY, 
    cert: CERT 
  },
app);

app.get('/', (req, res) => { 
  res.send('this is an secure server')
});

server.listen(PORT, () => { 
  console.log(`listening on ${PORT}`) 
});

```
<!-- Help them: apply -->
 Step 1 : use fs to read the **certificate** & **key** with fs  {.fragment .current-only data-code-focus=1-3 }

 Step 2 : use port `8080`, then use the https module instead of the http module, then use express  {.fragment .current-only data-code-focus=4-7 }

 Step 3 : Create your [HTTPS](https://nodejs.org/api/https.html) server and provide it with an object  {.fragment .current-only data-code-focus=8-15 }

 Step 4 : Create your GET request and listen to your server  {.fragment .current-only data-code-focus=13-15 }

---

### Additional Resources:
* [node.js - How to create an https server?](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)