---
title: "Primitive Data Types"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: true
enableChalkboard: false
enableMenu: false
loop: true
# autoSlide: 5000 
# controlsLayout: 'edges'
# openButton: false
# controls: true
# enableTitleFooter: false
---
<style>
.line.focus{background:none;font-size: xx-large;color: #5cc4ea;}
</style>

### Primitive Types

<!-- Short Lecture -->

```javascript
let vUndefined;
const vNull = null;
const vString = "some text"; 
const vNumber = 10; 
const vBoolean = false; 
const vSymbol = Symbol('foo');
const vBigInt = BigInt(9007199254740991);
```
These are annyoying types, JK, but you'll see why... {.fragment .current-only data-code-focus=1-2}

This is undefined. {.fragment .current-only data-code-focus=1-1}

This is a null. {.fragment .current-only data-code-focus=2-2}

This is a String. {.fragment .current-only data-code-focus=3-3}

Strings can be "some text", 'some text'.{.fragment .current-only data-code-focus=3-3}

Strings can also be [template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) \` some text\`.{.fragment .current-only data-code-focus=3-3}


This is a Number. {.fragment .current-only data-code-focus=4-4}

This is a Boolean. {.fragment .current-only data-code-focus=5-5}

This is a Symbol. {.fragment .current-only data-code-focus=6-6}

This is a BitInt. {.fragment .current-only data-code-focus=7-7}


---

### What is Console?

A built in JavaScript method that outputs a message to the web console ot terminal.

* Read about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

---

#### Using Console & Typeof Operator

```javascript
const vString = "some text"; 
console.log("\n Should be string: \n", typeof vString);
```

Students should: 

Step 1: Inside `0-student_files` create a new file called `primitives.js` and type the following code into it. {.fragment .current-only}

Step 2: In terminal, type, `node primitives.js` and display the output. {.fragment .current-only}
<!-- TEACHER PROMPT: Pause and have them show you -->

Step 3: Google, "MDN console" and "MDN typeof". {.fragment .current-only}

Step 4: In your own words, explain the code above and the purpose of `console` and `typeof`. {.fragment .current-only}

---

#### Non-Primitive: Object VS Array Object
```javascript
const vObjectObj = {
  property: "Value"
}
const vArrayObject = [
  1, 
  2.1, 
  "string"
]
const shoppingList = [
  "pizza", 
  "soda"
]
```
<!-- These are a few of the most common non-primitive types. -->

This is an [Object Object]. {.fragment .current-only data-code-focus=1-1}

The **Name** is "property" and **Value** is "Value" . {.fragment .current-only data-code-focus=2-2}

This is an [Array Object]. {.fragment .current-only data-code-focus=4-8}

Think of this as a list, it has three value. {.fragment .current-only data-code-focus=5-7}

A **number**. {.fragment .current-only data-code-focus=5-5}

A **decimal**. {.fragment .current-only data-code-focus=6-6}

A **string**. {.fragment .current-only data-code-focus=7-7}

---

#### Non-Primitive: Types of Functions

```javascript
function functionObject(params) {}
function* functionGenerator(params) {yield i;}
async function funAsync(params) {}
async function* funAsyncGenerator(params) {}
class ClassObj {}  
```

This is an Function Object. {.fragment .current-only data-code-focus=1-1}

This is an [Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), it can be paused and continued like a play button. {.fragment .current-only data-code-focus=2-2}

This is an [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function), which returns a **promise**. {.fragment .current-only data-code-focus=3-3}

This is an Async Generator Function, which returns a **promise**. {.fragment .current-only data-code-focus=4-4}

This is an "Class", which is syntax "sugar" for a **function**. {.fragment .current-only data-code-focus=5-5}

Ignore this and pretend like it never came into existence... JK {.fragment .current-only data-code-focus=5-5}

There are more types of functions and we'll go over them more later... {.fragment .current-only data-code-focus=1-5}

---

### What is Function?

A function is block of reusable code to preform a task. {.fragment}

First you create a function, then the function must be called in order to execute. {.fragment}

<!-- First-class object... {.fragment} -->

---

### Anatomy of functions

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
* **Parameters** `(param1, param2)`, which act as variables inside the functions definition.
{.fragment .current-only data-code-focus=1-1}
:::

**Return** keyword, ends the function
and the result is returned {.fragment .current-only data-code-focus=2-2}


:::block
* Calling the Function 

* When the function is called, we pass values into the **arguements** `(1,2)` 
{.fragment .current-only data-code-focus=4-4}
:::

---

### Anatomy of functions: 
#### Knowledge Check

What's the difference between **Parameters** and  **arguements** ? {.fragment .current-only data-code-focus=1-4}

```JavaScript
function add(param1, param2){
  return param1 + param2;
};
add(1, 2) //return a value of 3
```

---

#### Checking Primitive Types with `if` Statements

```javascript
let vUndefined;
const vNull = null;

const vString = "some text"; 
const vNumber = 10; 
const vBoolean = false; 
const vSymbol = Symbol('foo');
const vBigInt = BigInt(9007199254740991);

function LOGprimitive(VAR){
  if (typeof VAR !=="object" && VAR !=="function" && VAR !==null && VAR !==undefined)
  {
    return console.log("\n PRIMITIVE: ", typeof VAR, "\n Value: ",VAR);
  }
  return console.log("\n NOT PRIMITIVE..")
}

LOGprimitive(vUndefined)
LOGprimitive(vNull)

LOGprimitive(vString)
LOGprimitive(vNumber)
LOGprimitive(vBoolean)
LOGprimitive(vSymbol)
LOGprimitive(vBigInt)

```

Step 5: Inside `primitives.js`, delete the previous code and create test variables for each primative type. {.fragment .current-only data-code-focus=1-8}

<!-- Teacher Prompt: When you are done, raise your digital hand -->

Step 6: Inside `primitives.js`, after our test variables, create a function called `LOGprimitive`. {.fragment .current-only data-code-focus=9-16}

Step 7: Inside `primitives.js`, after our function, `LOGprimitive`, use the function to test our data. {.fragment .current-only data-code-focus=18-26}

Step 8: Explain the error... {.fragment .current-only data-code-focus=18-20}

---

### Thank You for reading...

If you liked this you can always read more on github by clicking the image below...

<p align="center">
  <a href="https://github.com/HansUXdev/JavaScript-First">
    <img src="https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg" height="300px" alt="HTTP Protocol"/>
  </a>
</p>

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


* Otherwise consider becoming a github sponsor 
<a class="github-button" href="https://github.com/sponsors/HansUXdev" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @HansUXdev on GitHub">Sponsor</a>

<script async defer src="https://buttons.github.io/buttons.js"></script>