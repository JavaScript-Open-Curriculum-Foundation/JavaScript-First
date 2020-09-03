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


</style>

### Section Overview

This chapter should cover the following:
1. Async Explaination
2. Callback
3. Promises
   - returned promises
   - dealing with rejection
   - multiple promises
4. Async Await
5. 


---

### What is Async?

---

### What is a Promise?


---

### Dealing with Rejection

---

### Callback Functions

[Callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
```javascript
function callbackFunction(var1, callback) {
    callback(var1);		
}

callbackFunction(1, function (x) { console.log(x); })
```
{.fragment .current-only  data-code-focus=1-5}


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

---


[Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
```javascript
function callbackFunction(var1, callback) {
    callback(var1);		
}

callbackFunction(1, function (x) { console.log(x); })
```
{.fragment .current-only  data-code-focus=1-5}


---

[Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)



```javascript
(async ()=> {
  try {
    // let something = await fetch();
    const URI = 'https://www.breakingbadapi.com/api/characters/1';
    const DATA = await fetch(URI);
    const json = await DATA.json();
    console.log(monsters);
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
****