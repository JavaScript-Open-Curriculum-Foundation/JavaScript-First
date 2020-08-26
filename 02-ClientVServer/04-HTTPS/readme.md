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

![](createKey.png)


---

### decrypted keys
 
```bash
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
```

---



### Creating a HTTPS server with Express 

 
```javascript
const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const PORT = 303;
const https = require('https');
const express = require('express');
const app = express();

const server = https.createServer(
  {key: key, cert: cert },
app);

app.get('/', (req, res) => { 
  res.send('this is an secure server')
});

server.listen(PORT, () => { 
  console.log(`listening on ${PORT}`) 
});

```
<!-- Help them: apply -->
 Step: Read the certificate key with fs  cs


---

