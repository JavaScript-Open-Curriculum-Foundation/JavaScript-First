---
title: "Functions"
# logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
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

### Chapter Overview

This chapter should cover the following:
1. Anatomy of functions
2. Catagories of Functions
3. Simple Example of Each function
    - Links to subjections for detailed breakdown of each

---

### What is Function?

A block of reusable code.

---








<!-- will be... automatically genrated from code file with a tool -->

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


:::block
* **Function** keyword
* Name of function, `add`
* Parameters `(param1, param2)`, which act as variables inside the functions definition.
{.fragment .current-only data-code-focus=1-1}
:::

**Return** keyword, ends the function
and the result is returned {.fragment .current-only data-code-focus=2-2}


:::block
* Calling the Function 

* When the function is called, we pass values into the **arguements** `(1,2)` 
{.fragment .current-only data-code-focus=4-4}

* When the function is called, we pass values into the **arguements** `(1,2)` 
{.fragment .current-only data-code-focus=1-2}


### Function Declaration 

 ```javascript
function functionDeclaration(params) {
    console.log(`hello ${params} \n`);
}
functionDeclaration("hello");
console.log(global) // not hoisted in node.js 
// console.log(window.functionDeclaration("hello")) 
 ```
Remember function **declarations** is **hoisted** in the browser but not in node  in{.fragment .current-only data-code-focus=5-6}

This errors out **declarations** is **hoisted** in the browser but not in node  in{.fragment .current-only data-code-focus=5-5}

---


