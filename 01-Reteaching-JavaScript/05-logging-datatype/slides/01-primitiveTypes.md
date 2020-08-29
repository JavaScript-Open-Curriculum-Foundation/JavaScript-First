---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "Primitive Datatypes"
logoImg: "https://raw.githubusercontent.com/HansUXdev/JavaScript-First/2acf5840c15af96602aceb66303ea69c5b75e344/logo.svg"
theme: "night"
highlightTheme: "Monokai"
#transition: " slide "
#transitionSpeed: " default " 
#slideNumber: true
#loop: true
#autoSlide: 5000 
# openButton: false
#enableMenu: false
# controlsLayout: 'edges'
# controls: true
#enableChalkboard: false
# enableTitleFooter: false
#autoSlideStoppable: true
---

<link rel='stylesheet' href='theme.css'>
<style>
</style>


#### Learning Objectives
1. Identify primitive types and non-primitive objects with console
2. Explain the null bug and how to check for it.
3. Demonstrate conditional logic by creating JS functions to check the datatype

---


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

#### Knowledge Check 1

#### What's the difference between **parameters** and  **arguements** ?

```JavaScript
function add(param1, param2){
  return param1 + param2;
};
add(1, 2) //return a value of 3
```

Arguments are when you **DEFINE the function** {.fragment .current-only data-code-focus=1-3 }

Arguments are when you **CALL the function** {.fragment .current-only data-code-focus=4-4 }

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

Step 7: The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator is used check if it is anything other than a primitive. {.fragment .current-only data-code-focus=11-11}

Step 8: we then **return** a console log of the value passed through the arguements {.fragment .current-only data-code-focus=11-11}

Step 9: If any of those conditions are true, we say it's not a primitive{.fragment .current-only data-code-focus=15-15}

Step 7: Inside `primitives.js`, after our function, `LOGprimitive`, use the function to test our data. {.fragment .current-only data-code-focus=18-26}

Step 8: Explain the error... {.fragment .current-only data-code-focus=18-20}

---
