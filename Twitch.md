---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "Welcome to the Twitch Class"
logoImg: "logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: true
loop: true
autoSlide: 2000 
# openButton: false
enableMenu: false
# controlsLayout: 'edges'
# controls: true
enableChalkboard: false
# enableTitleFooter: false
autoSlideStoppable: true
---

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-176679651-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-176679651-1');
</script>

<!-- <link rel="stylesheet" href="theme.css"> -->
<style>
.flex-slide{display:flex}
.column {display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
}

.double-column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
}
.present {}
.flex-slide p.fragment{ font-size: 0.6em; }

.reveal .slides section .fragment.visible {
    opacity: 1;
    visibility: inherit;
    font-size: large;
}

h1, h2, h3, h4, h5, h6, p {color:white;}

/* Fix Issue of hidden content still taking up space */
.fragment.fade-in-then-out:not(.current-fragment) {
  display:none;
}

</style>

### About #JavaScriptFirst

<p align="center">
   <a href="https://github.com/users/HansUXdev/sponsorship">
      <img src="https://hansmcmurdy.com/JavaScript-First/logo.svg" style="max-width:50%;" height="300px" alt="JavaScript Logo"/>
   </a>
</p>

--

### Approach
This book attempts to adopt a Career and Technical Education appoach to the content development and implementation.

![CTE](CTE.drawio.svg)

--

## Objectives of the course
Teach anyone 16+ how to code a website, server and mobile app using **JavaScript**.

--

### What this book covers:
This book is still in **early access** and **open source**.
The content is made to be **open source curriculum**. {.fragment}

You will learn how to code with JavaScript using the node.js runtime environment rather than a browser and by the end, you will build a server and a website using JavaScript. {.fragment}


Content will ALWAYS be free for STUDENTS. {.fragment}

A live version of the first two chapters is available on  [twitch.tv/hansoncoding](https://www.twitch.tv/hansoncoding/about). {.fragment}

It takes a **blended learning approach** . {.fragment}

[![Twitch Status ](https://img.shields.io/twitch/status/hansoncoding?style=for-the-badge)](https://www.twitch.tv/hansoncoding) {.fragment}

If the button ^ is live, click it. {.fragment}

--

### About GitPod
[GitPod](http://gitpod.io/) is used to provide readers and students with a **zero-config developer environment** where they can follow along even on a chromebook or tablet.

This is helps provide an **interactive experiance** through  [codetogether](https://www.codetogether.com/), [gitduck](https://gitduck.com/) and other means of activities that facilitate remote learning. 

<p align="center">  
   <a href="https://gitpod.io/#https://github.com/HansUXdev/JavaScript-First"><img src="http://gitpod.io/button/open-in-gitpod.svg" alt="Gray shape shifter" height="50px"/></a>  
</p>

---

### Chapter 1: Reteaching JavaScript & Web Development
  - History of JavaScript
  - Learning Terminal, NVM, Git & Node.js
  - JavaScript Datatypes
  - logging datatypes 
  - Types of Functions

--

###  Chapter 2: Introduction to Web Development with HTTP
   - Learn JavaScript before by building an HTTP Server with Node.js
   - Learn HTML with ES6 Template Strings
   - Secure your site with an SSL Certificate
   - Hosting your node.js server
   - Connect it to web Domain

--

###  Chapter 3: Test Driven Curriculum
   - Unit Tests 
   - Users Tests (Twitter Bot)
   - Automatic Responsive Testing 
   - Automatic Cross-Browser Testing 

--


### Future Chapters
Future chapters and sub chapters in this book will be available on github in the [/00-Drafts](https://github.com/HansUXdev/JavaScript-First/tree/master/00-Drafts) directory.

Current Content may include:
1. [Learn Mongo GitPod](https://github.com/HansUXdev/LearnMongoGitPod) {.fragment}
2. War Games CLI Project  {.fragment}
3. React {.fragment}
4. Data Structures {.fragment}
5. Algorithms {.fragment}

---

### Wecome to class... 


<div class="flex-slide">

:::block

1. Open up the Content: 
   hansmcmurdy.com/JavaScript-First/ {.fragment}
2. These Slide: hansmcmurdy.com/JavaScript-First/Twitch.html {.fragment}

{.column}
:::

:::block
1. Signup for [Github](https://github.com/) {.fragment}
2. Go to the [course repository](https://github.com/HansUXdev/JavaScript-First) at github.com/HansUXdev/JavaScript-First{.fragment}
3. Fork it ![GitHub Forks](https://img.shields.io/github/forks/HansUXdev/JavaScript-First?style=social) {.fragment}
4. Open it on GitPod {.fragment}
5. Follow along in text (readme files or [medium](https://medium.com/@HansOnConsult)) or video ([twitch](https://www.twitch.tv/hansoncoding) / [youtube](https://www.youtube.com/channel/UCCGfELkPCJg1XHxQfFFz7pw/about)) {.fragment}
   
{.double-column}
:::


</div>

--

### Supporting the Content
If you like the any of the content, there are several ways you can show your support without paying a penny.

**Support Open Source:**

[![GitHub followers](https://img.shields.io/github/followers/HansUXdev?style=social)](https://github.com/HansUXdev?tab=followers) [![GitHub followers](https://img.shields.io/github/stars/HansUXdev/JavaScript-First?style=social)](https://github.com/HansUXdev/JavaScript-First/stargazers)

Tweet about it using the hashtag #JavaScriptFirst
<!-- You can also consider becoming a supporter in order to help motivate me to do a bunch more awesome stuff. -->

---


### Why should consider becoming a sponsor:

<div class="flex-slide">

:::block

1. **Raffle** every month to give back to my supporters to help it grow.
{.fragment }

2. Network with school administrators/teachers and industry professional in order to **bring tech leaders into the classroom** (zoom || in-person).  {.fragment }
   
3. Advocate the adoption of **open source certifications** in CTE schools.  {.fragment }

{.column}
:::


:::block
   
4. Help donate 4G laptops/tablets to students who are struggling during COVID.  {.fragment }
   
5. Create an affordable educational community that teaches people how to code and helps them achieve success in their careers.  {.fragment }

{.double-column}
:::

</div>


[Consider becoming a Github Sponsor](https://github.com/users/HansUXdev/sponsorship)  {.fragment }

[Consider becoming a Patreon](https://www.patreon.com/hansOnDevelopment) {.fragment }