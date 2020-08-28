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

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-176679651-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-176679651-1');
</script>

<link rel="stylesheet" href="theme.css">

### Chapter Overview

This chapter should cover the following:
1. Anatomy of functions
2. Catagories of Functions
3. Simple Examples of Each function

---


### Learning Objectives
1. Explain how you can use hoisted functions?
2. Explain why you use a return statement?
3. Explain the difference between Parameters and Arguments
4. Identify different types of functions

---

### What is Function?

A functions is block of reusable code to preform a task. {.fragment}

First-class object... {.fragment}

---

### Catagories of Functions

**1. Synchronous Functions** {.fragment }
:::block
1. Function Declaration
2. Function Expression
3. Anonymous Functions
4. Arrow Functions
5. Curried Function
6. Closure
7. IFFE
{.fragment .current-only  }
:::

**2. Async Functions** {.fragment   }
:::block
1. Callbacks
2. Promises
3. Generator
4. Async / Await
5. Async Generator
{.fragment .current-only  }
:::


**2. Object Oriented Functions** {.fragment }
:::block
1. Constructor
2. Class
<!-- Add Callback and  -->
{.fragment .current-only  }
:::



---



#### Synchronous Functions:

What a **function declaration** looks like:
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

* Function must be called {.fragment .current-only data-code-focus=4-4}

* When the function is called, we pass values into the **arguements** `(1,2)` {.fragment .current-only data-code-focus=4-4}

* When the function is called, we pass values into the **arguements** `(1,2)` {.fragment .current-only data-code-focus=1-2}

---

### Function Expression 
 
```javascript
const name = function(){
  /*Code Block*/
}
```
<!-- Help them: remember -->
 refers to  cs

---


### Arrow Functions 

```javascript
  // single line
  () => console.log("single");
  // multiline
  () => {
    console.log("multiline");
  }
  // named arrow function
  const name = (params) => {
    console.log(params,"named");
  }
```
<!-- Help them: remember -->

---


### Anonymous Functions 

 
```javascript
function(){ /*Code Block*/ }
```
<!-- Help them: remember -->
This usually used as a callback or inside and IFFE.

---

### IFFE 


```javascript
  (function () {
    var foo = "bar";
    // Outputs: "bar"
    console.log(foo);
  })();
```
<!-- Help them: remember -->
 refers to  cs




---

<!-- This example i straight from MDN -->

### [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,state%20(the%20lexical%20environment).&text=In%20JavaScript%2C%20closures%20are%20created,created%2C%20at%20function%20creation%20time.) 
is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

```javascript
function init() {
  var name = 'Mozilla'; 
  function displayName() { 
    alert(name); 
  }
  displayName();
}
init();
```
<!-- Help them: remember -->
 `name`  is function scoped to the function `init()` {.fragment .current-only data-code-focus=2-2 }
 
 displayName() is the inner function, a closure {.fragment .current-only data-code-focus=3-5 }

 using the `name` variable which is in the parent function, `init()` {.fragment .current-only data-code-focus=4-4 }

---

### [Currying](https://javascript.info/currying-partials) 
is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(x)(y)(z) .
 
```javascript
function closureScoped(job) {
  if (job=="student") {
    return (name) => console.log(`my name is ${name} my job is study this code`) 
  }
  else if (job=="teacher") {
    return (name) => console.log(`my name is ${name} my job is ${job}`) 
  }
  else {
    return () => console.log(`I'm not paying attention because my job is ${job}`) 
  }
}
closureScoped("designer")("hans");
```

<!-- Help them: remember -->
 The functions checks what the job title is


---









<!-- ### Pure Function

* Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).

```JavaScript
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}


* Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams). -->


### Async Functions

Callbacks {.fragment .current-only  }

:::block

```javascript
function callbackFunction(var1, callback) {
    callback(var1);		
}

callbackFunction(1, function (x) { console.log(x); })
```
{.fragment .current-only  data-code-focus=1-5}
:::



---
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
<!-- Source: [FCC](https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/) -->

```javascript
const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});
```



Generator

Async Functions



```JavaScript
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}

---

### Object Oriented Functions
This gets it's own chapter


Constructor Function

Class


---
