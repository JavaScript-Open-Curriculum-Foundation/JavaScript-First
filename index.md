---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "JavaScript First"
logoImg: "https://hansmcmurdy.com/JavaScript-First/logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: true
loop: true
autoSlide: 50000 
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

<link rel="stylesheet" href="theme.css">
<!-- Global site tag (gtag.js) - Google Analytics -->

<link rel="stylesheet" href="theme.css">


<p align="center">
   <a href="https://github.com/users/HansUXdev/sponsorship">
      <img src="https://hansmcmurdy.com/JavaScript-First/logo.svg" style="max-width:50%;" height="300px" alt="JavaScript Logo"/>
   </a>
</p>
<h3 align="center"> JavaScript First</h3>

--

### What this book covers:

<p align="center">In this book, you'll learn how to code with JavaScript using the node.js runtime environment rather than a browser and by the end, you will build a server and a website using JavaScript.
</p>

--



### Academic Structure
Every chapter and section is designed to meet some sort of state standard in the following categories:
- [Web Page Development](https://www.azed.gov/cte/wpd/)
- [Software and App Design](https://www.azed.gov/cte/sd/)

--

#### Learning Structure
Learning objectives use [blooms taxonomy](https://en.wikipedia.org/wiki/Bloom's_taxonomy).
![](./blooms.drawio.svg)

--

### Approach
This book attempts to adopt a Career and Technical Education appoach.

![CTE](CTE.drawio.svg)

Learn more about the [specifics of the CTE](CTE.html)...


--

## Instruction
This book takes a **blended learning approach** designed to be friendly to both students and teachers.

Instructions are provided both in written form and online through various means.

<a href="https://medium.com/@hansOnConsult" class="MEDIUM">
   <img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" />
</a>
<a href="https://dev.to/hansuxdev" class="DEV TO">
   <img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" />
</a>
<a href="https://www.youtube.com/channel/UCCGfELkPCJg1XHxQfFFz7pw/about" class="YOUTUBE">
   <img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" />
</a>
<a href="https://www.twitch.tv/hansoncoding" class="Twitch"><img src="https://img.shields.io/twitch/status/hansoncoding?style=for-the-badge" /></a> 

--

### Online Interactions: About GitPod

:::block
[GitPod](http://gitpod.io/) is used to provide readers and students with a **zero-config developer environment** where they can follow along even on a chromebook or tablet.
{.fragment .current-only  }
:::

:::block
This is designed to provide an **interactive experiance** through [codetogether](https://www.codetogether.com/), [gitduck](https://gitduck.com/) and other means of activities that facilitate remote learning. 
<p align="center">  
   <a href="https://gitpod.io/#https://github.com/HansUXdev/JavaScript-First"><img src="http://gitpod.io/button/open-in-gitpod.svg" alt="Gray shape shifter" height="50px"/></a>  
</p>

{.fragment .current-only  }
:::

--

### Interaction: Twitch
I also use [Twitch](https://www.twitch.tv/hansoncoding/about) as a way to demo new content I'm working on before I do formal classes.

<a href="https://www.twitch.tv/hansoncoding" class="Twitch"><img src="https://img.shields.io/twitch/status/hansoncoding?style=for-the-badge" /></a> 

--

## Work-based Learning
Work-based Learning is provided a number of ways:
1. [Awesome Interview Questions](https://github.com/MaximAbramchuck/awesome-interview-questions) in each chapter.
2. Small Business Sponsors
3. Industry Partners 


<!-- <a href="https://patreon.com/hansOnDevelopment"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledgesssss&style=for-the-badge" /> </a> -->

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

---

### Chapters
| Term        | Description |
|-------------|:-----------:|
| Article     | Is a medium article used to provide basic understanding of terms and conceptes  |
| Code Along  | Code Slides break down the code line by line, students are expected to type out the code and run it.  |
| Activity    | Students create something |
| Exercise    | Students create something with step by step solutions |
| Project     | This is a work-based project and has no stepped solutions. Students are expected to apply what they learned during the exercises.  |




---

#### Chapter 1: Reteaching JavaScript & Web Development

> **Objective:** Students should know the syntax of JavaScript and how to use variables, hoisting, objects, functions, etc {.fragment .current-only  }

| Lessons        | Type |
|-------------|:-----------:|
| [History of JavaScript](https://medium.com/javascript-in-plain-english/a-brief-history-of-javascript-9289a4d344d2)   | Article  |
| [Learning Terminal, NVM, Git & Node.js](https://medium.com/swlh/terminal-basics-and-installing-nvm-node-js-631cf9476ac4)   | Activity  |
| [JavaScript Datatypes](https://medium.com/javascript-in-plain-english/what-do-you-really-know-about-variables-data-types-and-immutability-in-javascript-1730835a9e87?source=friends_link&sk=f71e5c38da34456f55ed813b23d4ed78)   | Code Along  |
| [Types of Functions](01-Reteaching-JavaScript/04-TypesOfFunctions/export/index.html)   | Code Along  |
| Logging Datatypes    | Exercise  |
| War Game?    | Exercise  |

[View the whole chapter](/01-Reteaching-JavaScript/Overview.html) {.fragment .current-only  }

---

####  Chapter 2: Introduction to Web Development with HTTP
> **Objective:** Students will build their first website and deploy it by the end of the chapter. {.fragment .current-only  }

| Lessons     | Type |
|-------------|:-----------:|
| Learn HTML by building an HTTP Server with Node.js    | Exercise  |
| Build a dynamic Website with Vanilla.js with Functions & Template Strings          | Exercise  |
| Deploying a Dynamic site with HTTPS & Open SSL        | Exercise  |


---

####  Chapter 3: Test Driven Development
> **Objective:** Students will learn how to write tests for code challenges and to automate front-end testing tasks. {.fragment .current-only  }

| Lessons                        | Type |
|--------------------------------|:-----------:|
| Writing Unit Tests             | Exercise  |
| Automate Responsive Testing with puppeteer   | Exercise  |
| Automate Cross-Browser with puppeteer   | Exercise  |
| Build a Twitter Bot   | Exercise  |


---

### Future Chapters
This book is still in **early access** and **open source**. Which means future chapters and sub chapters in this book will be available on github in the [/00-Drafts](https://github.com/HansUXdev/JavaScript-First/tree/master/00-Drafts) directory.

Current Content includes:
1. [Learn Mongo GitPod](https://github.com/HansUXdev/LearnMongoGitPod)
2. War Games CLI Exercise?
3. React
4. Data Structures
5. Algorithms

--

## Road Map
This is a visual demonstration of a handful of the things I want to cover...

[View the whole "roadmap"](https://github.com/HansUXdev/JavaScript-First/blob/master/JavaScriptRoadmap.drawio.svg)

![](./JavaScriptRoadmap.drawio.svg)


---

### Supporting the Content
If you like the any of the content, there are several ways you can show your support without paying a penny.

**Support Open Source:**

[![GitHub followers](https://img.shields.io/github/followers/HansUXdev?style=social)](https://github.com/HansUXdev?tab=followers) [![GitHub followers](https://img.shields.io/github/stars/HansUXdev/JavaScript-First?style=social)](https://github.com/HansUXdev/JavaScript-First/stargazers)

You can also consider becoming a supporter in order to help motivate me to do a bunch more awesome stuff.

--

## Publishing

This book will always be free for students and self-taught developers.

<!-- This edition of the books is being self-published through [GetiPub](https://geti.pub) publishing. The published books will be made available for sale through normal book retail sources. -->

If you'd like to contribute financially towards the effort creating this book, please consider following me on [medium](https://medium.com/@HansOnConsult), reading the articles on there and clapping / sharing them actually help more than you'd think. 

--

### What sponsorship helps support:

1. Raffle every month to give back to my supporters to help it grow.
{.fragment }

1. Network with school administrators/teachers and industry professional in order to bring tech leaders into the classroom (zoom || in-person).  {.fragment }
   
2. Advocate the adoption of open source certifications in CTE schools.  {.fragment }
   
3. Help donate 4G laptops/tablets to students who are struggling during COVID.  {.fragment }
   
4. Create an affordable educational community that teaches people how to code and helps them achieve success in their careers.  {.fragment }

[Consider becoming a Github Sponsor](https://github.com/users/HansUXdev/sponsorship)  {.fragment }

[Consider becoming a Patreon](https://www.patreon.com/hansOnDevelopment) {.fragment }
