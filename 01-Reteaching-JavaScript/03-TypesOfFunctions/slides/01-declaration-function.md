---
title: "Functions"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "dracula"
slideNumber: true
# loop: true
# autoSlide: 5000 
# openButton: false
enableMenu: false
# controlsLayout: 'edges'
# controls: true
enableChalkboard: false
# enableTitleFooter: false
  # autoSlideStoppable: true,
autoSlide: 0
---

<style>
/* Remove the background color and make mongo commands more visible by adding color */
.line.focus{
  background:none;
  font-size: xx-large;
  color: #5cc4ea;
}

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

</style>

<!-- ### Chapter Overview

This chapter should cover the following:
1. Anatomy of functions
2. Catagories of Functions
3. Simple Example of Each function
    - Links to subjections for detailed breakdown of each

--- -->

### What is Function?

 > "A block of reusable code." {.fragment .current-only  }

:::block {.fragment .current-only  }
There are two steps to this:
1.  creating the function
2. using it / calling it.
  
:::



---


### First-class Functions

> "functions are first-class citizens, which means they are treated like any other variable. This is where JavaScript gets it's best features." {.fragment .current-only}


:::block {.fragment .current-only  }
As a first class citizen, functions can be used as:
1. callbacks in other function, 
2. creating asynchronous operations, 
3. preform recursion for iterative operations
  
:::

---

### Function Declaration

What a function declaration looks like:
```JavaScript
function add(param1, param2){
  return param1 + param2;
};
add(1, 2) //return a value of 3
```

Has the following Features:

**Block Syntax**, with `{}` at the begining and the end of the function and usually followed by a `;` {.fragment .current-only data-code-focus=1-3}

* **Function** keyword
* Name of function, `add`
* Parameters `(param1, param2)`, which act as variables inside the functions definition.
{.fragment .current-only data-code-focus=1-1}

**Return** keyword, ends the function
and the result is returned {.fragment .current-only data-code-focus=2-2}

---


### Using Functions

```JavaScript
add(1, 2) //return a value of 3
```
**Calling** the Function:
 
We pass *values*, `(1,2)`, into the **arguements** 
{.fragment .current-only data-code-focus=1-1}

**Values of arguements** can be any type of variable, and because functions are *treated like variable*, you use can pass them into a **arguement** which is known as a **callback**.
{.fragment .current-only data-code-focus=1-1}


---

### Function Declaration - Node.js

```javascript
AAhoisted = "undeclared, hoisted";
var AAA = "declared, not hoisted,  var doesn't matter as much, let/const still better";
function functionDeclaration() {
    console.log(`\n Is DECLARATION hoisted:  ${global.functionEXPRESSION} \n`);
}
var functionEXPRESSION = function () {
    console.log(`\n Is EXPRESSION hoisted:  ${global.functionEXPRESSION} \n`);
}
// Log the global object
console.log(global)
console.log("function DECLARATION are: ", global.functionDeclaration);
console.log("function EXPRESSION are: ", global.functionEXPRESSION);

// Predict the output code
functionDeclaration();
functionEXPRESSION(); 
```
These functions, variables and hoisting work **differently** in the **node.js** runtime environment! {.fragment .current-only data-code-focus=1-8}

Will a function **DECLARATION** be **hoisted** in node and added to the global object?{.fragment  data-code-focus=3-5}

Will a function **EXPRESSION** be **hoisted** in node and added to the global object?{.fragment  data-code-focus=6-8}

Log the global object and find out.{.fragment .current-only data-code-focus=9-12}


### Type you guess in chat. {.fragment .current-only}

### RUN the code. {.fragment .current-only}

### POINTS for correct answers. {.fragment .current-only}

---

### Function Declaration - Browser

```javascript
AAhoisted = "undeclared, hoisted";
var AAA = "declared, hoisted, dontUseVar";
function functionDeclaration(params) {
    console.log(`\n Is Declaration hoisted:  ${window.functionDeclaration} \n`);
}
var functionEXPRESSION = function () {
    console.log(`\n Is EXPRESSION hoisted:  ${window.functionEXPRESSION} \n`);
}
// Log the global object
console.log(window)
console.log("function DECLARATION are: ", window.functionDeclaration);
console.log("function EXPRESSION are: ", window.functionEXPRESSION);
// Predict the output code
functionDeclaration();
functionEXPRESSION(); 
```

These functions work **differently** in the **browser** ! {.fragment .current-only data-code-focus=1-8}

Will a function **DECLARATION** be **hoisted** in *browser* and added to the global object?{.fragment  data-code-focus=3-5}

Will a function **EXPRESSION** be **hoisted** in *browser* and added to the global object?{.fragment  data-code-focus=6-8}

Log the global object and find out.{.fragment .current-only data-code-focus=9-12}

### Type you guess in chat. {.fragment .current-only}

### RUN the code. {.fragment .current-only}

### POINTS for correct answers. {.fragment .current-only}

---

### Thank You for reading...

Follow me on Social:


`@HansOnCoding`

:::block {.fragment .current-only  }

<a href="https://twitter.com/hansOnCoding" class="TWITTER">
   <img src="https://img.shields.io/badge/twitter-%2312100E.svg?&style=for-the-badge&logo=twitter&logoColor=white" />
</a>
<a href="https://medium.com/@hansOnConsult" class="MEDIUM">
   <img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" />
</a>
<a href="https://dev.to/HansOnCoding" class="DEV TO">
   <img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" />
</a>
<br>
<a href="https://www.youtube.com/channel/UCCGfELkPCJg1XHxQfFFz7pw/about" class="YOUTUBE">
   <img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" />
</a>
<a href="https://www.twitch.tv/hansoncoding" class="Twitch">
   <img src="https://img.shields.io/twitch/status/hansoncoding?style=for-the-badge" />
</a>

:::

`@HansUxDev`

:::block {.fragment .current-only  }

<a href="https://github.com/sponsors/HansUXdev" class="GITHUB">
   <img src="https://img.shields.io/badge/github-%230A0A0A.svg?&style=for-the-badge&logo=github&logoColor=white" />
</a>


:::


