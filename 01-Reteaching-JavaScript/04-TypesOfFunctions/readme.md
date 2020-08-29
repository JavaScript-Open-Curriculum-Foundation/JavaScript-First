---
title: "Types of Functions"
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
# previewLinks: true
# center: true
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

[First-class object](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) and are treated just like any other variable{.fragment}

---

### Catagories of Functions

**1. Synchronous Functions** {.fragment }

**2. Async Functions** {.fragment   }

**3. Object Oriented Functions** {.fragment }

---

### Synchronous Functions

1. Function Declaration
2. Function Expression
3. Anonymous Functions
4. Arrow Functions
5. Curried Function
6. Closure
7. IFFE


---

### Async Functions 

1. Callbacks
2. Promises
3. Generator
4. Async / Await
5. Async Generator

---

### Object Oriented Functions

1. Constructor
2. Class


---

#### **[Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** VS **[Function Expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function#:~:text=A%20function%20expression%20is%20very,expressions%20to%20create%20anonymous%20functions.)** :

This is a **Function DECLARATION**, {.fragment .current-only data-code-focus=1-3}

This is a **Functions EXPRESSION** {.fragment .current-only data-code-focus=5-6 }

This is a **ANONYMOUS Functions** {.fragment .current-only data-code-focus=7-8 }

<div class="flex-slide">

:::block


```JavaScript
function add(param1, param2){
  return param1 + param2;
};
add(1, 2) //returns a value of 3
// Expression
const name = function(){/*Code Block*/}
// Anonymous Functions
function(){ /*Code Block*/ }
```

{.column}
:::

:::block
<!-- Has the following Features: -->

**Block Syntax**, with `{}` at the begining and the end of the function and usually followed by a `;` {.fragment .current-only data-code-focus=1-3}


* **Function** keyword {.fragment .current-only data-code-focus=1-1}
* Name of function, `add` is on the right of the function keyword {.fragment .current-only data-code-focus=1-1}
* Parameters `(param1, param2)`, which act as variables inside the functions definition. {.fragment .current-only data-code-focus=1-1}


**Return** keyword, ends the function
and the result is returned {.fragment .current-only data-code-focus=2-2}

* Function must be called before it runs {.fragment .current-only data-code-focus=4-4}

* When the function is called, we pass values into the **arguements** `(1,2)` {.fragment .current-only data-code-focus=4-4}

* When the function is called, we pass values into the **arguements** `(1,2)` {.fragment .current-only data-code-focus=1-2}

* Function **DECLARATIONS**, are always hoisted. {.fragment .current-only data-code-focus=1-3}

<!-- Function Expression -->

The main difference is where the function `name` is place. {.fragment .current-only data-code-focus=6-6 }

when function `name` is placed on the left hand side of the `function` keyword, its an expression. {.fragment .current-only data-code-focus=6-6 }

`function`  **expressions** are hoisted in the browserm but not in node. {.fragment .current-only data-code-focus=6-6 }

In an Expression, the name can be ommitted in order to make it **Anonymous** {.fragment .current-only data-code-focus=7-8 }

This usually used as a callback or inside and IFFE. {.fragment}

<!-- Anonymous Functions  -->
This usually used as a callback or inside and IFFE. {.fragment}

{.double-column}
:::

</div>

---

### [Arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Functions 

```javascript
  // named arrow function
  const name = (params) => {
    console.log(params,"named");
  }
  // multiline
  () => {
    console.log("multiline");
  }
  // single line
  (a,b,c) => console.log("single");
  a => console.log(a);
```

This is an **expression** using an arrow function expressin {.fragment .current-only data-code-focus=1-4 }

This is the **Anonymous** version. {.fragment .current-only data-code-focus=5-8 }

The `()` are used for multiple parameters and the `{}` can be ommitted. {.fragment .current-only data-code-focus=10-10 }

The `()` can be ommitted. {.fragment .current-only data-code-focus=11-11 }

---


### [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression)





<!-- Help them: remember -->
We start with two parentheses `()()`. {.fragment .current-only data-code-focus=1-1 }

Then add an anonymous function, inside the first `()`.  {.fragment .current-only data-code-focus=2-3 }

Can you **identify the lines of anonymous function**?  {.fragment .current-only data-code-focus=1-10 }

:::block
```javascript
  // ()()
  // (function(){})()
  // (()=>{})()
  (
  function () {
    var foo = "bar";
    console.log(foo);
  }
  )
  ();
```
{.fragment  .fade-out }
:::

:::block
This is what you normally see:
```javascript
  (function () {
    var foo = "bar";
    console.log(foo);
  })();
```
{.fragment  .fade-in-then-out }
:::

:::block
Increasingly more common:
```javascript
  (()=> {
    var foo = "bar";
    console.log(foo);
  })();
```
{.fragment  .fade-in-then-out }
:::

---

<!-- This example i straight from MDN -->

### [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,state%20(the%20lexical%20environment).&text=In%20JavaScript%2C%20closures%20are%20created,created%2C%20at%20function%20creation%20time.) 
is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

```javascript
function init() {
  var name = 'Mozilla'; 
  function displayName() { 
    console.log(name); 
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
> is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(x)(y)(z). {.fragment .current-only  } 
 

 
Student Steps:

Step 1: Inside `0-student_files/chp1/` create a file called `closureScoped`... {.fragment .current-only } 
 
Step 2: Duplicate the code the slide {.fragment .current-only  data-code-focus=1-12} 
 
Step 3: In your own words, explain how `code` works in a tweet, using #JavaScriptFIrst. {.fragment .current-only data-code-focus=1-12 } 

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
<!-- Instructor Steps: -->
Step 1: Define the function. {.fragment .current-only data-code-focus=1-11 }

Step 2: Write a conditional if statement. {.fragment .current-only data-code-focus=2-4 }

Step 3: return an **anonymous arrow function** with a `name` parameter. {.fragment .current-only data-code-focus=3-3 }

By **returning** the `(name)=>`, the function `closureScoped();` gets access to  `("hans")` argument. {.fragment .current-only data-code-focus=3-3 }

Step 4: finish with some funny else if statements {.fragment .current-only data-code-focus=5-10 }

---

<!-- ### Pure Function

* Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).

```JavaScript
```
This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}


* Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams). -->


[Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

> is a function that receives another function name, as an **arguement** when it is called... {.fragment .current-only}

Student Steps:

Step 1: Inside `0-student_files/chp1/` create a file called `callbacks.js`... {.fragment .current-only } 
 
Step 2: Duplicate the code the slide {.fragment .current-only  data-code-focus=1-12} 

Step 3: In your own words, explain how `code` works in a tweet, using `#JavaScriptFirst`. {.fragment .current-only data-code-focus=1-12 } 



```javascript
function callbackFunction(var1, callback) {
    callback(var1);		
}

callbackFunction(
  1, 
  function (x) { console.log(x) }
)
```
Explain the function:

Step 1: Define the function. {.fragment .current-only data-code-focus=1-3 }

Step 2: Use the function. {.fragment .current-only data-code-focus=4-8 }

Note that `1` is the first arguement. {.fragment .current-only data-code-focus=6-6}

Note that `function (x) { console.log(x) }` is the second arguement, when `callbackFunction()` is used. {.fragment .current-only data-code-focus=7-7 }



---

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
<!-- Source: [FCC](https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/) -->

Student Steps:

Step 1: Inside `0-student_files/chp1/` create a file called `promises.js` {.fragment .current-only data-code-focus=1-1 }
{.fragment .current-only  data-code-focus=1-9}

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

I promise I'll write more on this... {.fragment}
Remember, I'm a javascript dev and used to rejection.. {.fragment}


---

[Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

> is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol. {.fragment .current-only}

Student Steps:

Step 1: Inside `0-student_files/chp1/` create a file called `generators.js` {.fragment .current-only data-code-focus=1-1 }
{.fragment .current-only  data-code-focus=1-5}

```javascript
function* generator() { 
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); 
```



---

[Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)



```javascript
(async ()=> {
  try {
    // let something = await fetch();
    const URI = 'https://www.breakingbadapi.com/api/characters/1';
    const DATA = await fetch(URI);
    const json = await DATA.json();
    console.log(json);
  } 
  catch (error) {
     console.log(error)
  }
  finally {
  // settled (fulfilled or rejected)
  }
})();
```
Begin the IIFE with `async` {.fragment .current-only data-code-focus=1-1}

ENd the IIFE {.fragment .current-only data-code-focus=11-11}

Add Try, Catch, Finally {.fragment .current-only data-code-focus=2-10}

Write your code in `Try` statement {.fragment .current-only data-code-focus=2-4}

Use Catch to handle the errors and reject Promises{.fragment .current-only data-code-focus=2-10}

Then in the [Finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) block handle  {.fragment .current-only data-code-focus=2-10}

Add Try, Catch, Finally {.fragment .current-only data-code-focus=2-10}

This defines the doument type as html. {.fragment .current-only data-code-focus=1-1}

---

### Object Oriented Functions
This will get it's own chapter later, in **Design Patterns**.

--

[Constructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

> Sometimes we need a "blueprint" for creating many objects of the same "type". {.fragment .current-only  }

```javascript
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const myFather = new Person("John", "Doe", 50, "blue");
```
This is our constructor function.{.fragment .current-only  data-code-focus=1-5}

The keyword `THIS`, is essentially a reference to itself and the main way you can remember it is a constructor. {.fragment .current-only data-code-focus=2-4}

--

[Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

> "Classes are a template for creating object" {.fragment .current-only  }

```javascript
class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
}
let me = new Person("John", "Doe", 50);
```

The is a "class" version of our previous constructor. {.fragment .current-only  data-code-focus=1-8}

A JavaScript class does not work like classes in other languages. They are just an alternitive syntax. {.fragment .current-only  data-code-focus=1-8}

---


### Thank You for reading...

If you liked this you can always read more on github by clicking the image below...

<!-- <p align="center">
  <a href="https://github.com/HansUXdev/JavaScript-First">
    <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg" height="300px" alt="HTTP Protocol"/>
  </a>
</p> -->

**You can view more content here:**

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

