---
title: "Functions"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "monokai"
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
/* Remove the background color and make mongo commands more visible by adding color */
.line.focus{
  background:none;
  font-size: xx-large;
  color: #5cc4ea;
}

#logo { 
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

}

</style>

### Chapter Overview

This chapter should cover the following:
1. Anatomy of functions
2. Catagories of Functions
3. Simple Example of Each function
   - Links to subjections for detailed breakdown of each

---

### What is Function?

A functions is block of reusable code to preform a task. {.fragment}

First you create a function, then the function must be called in order to execute. {.fragment}

First-class object... {.fragment}

---

### Learning Objectives
1. Explain how you can use hoisted functions?
2. Explain why you use a return statement?
3. Explain the difference between Parameters and Arguments


---

### Catagories of Functions

1. **Simple Functions**
2. **Object Oriented Functions**
3. **Async Functions**

---


:::block
**Simple Functions**

1. Function Declaration
2. Function Expression
3. Anonymous Functions
4. Arrow Functions
5. Curried Function
6. Closure
7. IFFE
<!-- Add Callback and  -->

:::


---


:::block
**Object Oriented Functions**

1. Constructor Function
2. Class
   - factory
   - etc
   - etc


:::

---



:::block
**Async Functions**

1. Callbacks VS H.O.F.
2. Promises
3. Generator
4. Async / Await
5. Async Generator

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

:::

---

### Pure Function

* Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).

```JavaScript
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}


* Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).



---

### Complex Functions

Callbacks VS H.O.F.

Promises

Generator

Async Functions

Constructor Function

Class

```JavaScript
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}

---

