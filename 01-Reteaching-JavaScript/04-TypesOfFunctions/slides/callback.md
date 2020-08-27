---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "Callback"
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


### What are Callback Functions?

::: block

**Key takeaways:**
> Callbacks refers to a function that is called as a parameter for another function. {.fragment .current-only }
:::

---

### Why you need to learn about them.



---

### Callbacks: Example 1
 
```javascript
function callbackFunction(var1, callback) {
    callback(var1);		
}

callbackFunction(1, function (x) { console.log(x); })
```

**Define** the callback function {.fragment .current-only data-code-focus=1-3 }

**Use** the callback function {.fragment .current-only data-code-focus=5-5 }

---

### Callbacks: Example 2

**Define** a function {.fragment .current-only data-code-focus=1-3 }


::: block

* Creating a callback involves two steps {.fragment .current-only }
:::

```javascript
function callback(x) {
  console.log(x);
}
function callbackFunction(var1, var2, cb1, cb2) {
  cb1(var1);	
  cb2(var2);	
}
callbackFunction( 1, 2, // var1, var2
  callback(x), // callback1
  callback(x)  // callback2
);
```
**Steps:**

Step 1: write a function. {.fragment .current-only data-code-focus=1-3 }

Step 1: write a function. {.fragment .current-only data-code-focus=4-5 }


A JavaScript function is a block of code that will be executed when you call it {.fragment .current-only }

Because JavaScript functions are first-class objects, you can pass functions to other functions as variables {.fragment .current-only }

The method of passing in functions as parameters to other functions to use them inside is used in JavaScript libraries almost everywhere {.fragment .current-only }

A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into {.fragment .current-only }

JavaScript Callback Functions can be used synchronously or asynchronously {.fragment .current-only }


Read more about it [here](https://www.dashingd3js.com/lessons/javascript-callback-functions) {.fragment  }


---


