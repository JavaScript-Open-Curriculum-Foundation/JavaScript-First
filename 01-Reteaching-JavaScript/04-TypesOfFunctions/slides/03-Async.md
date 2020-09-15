---
title: "Async Functions"
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

<!-- https://www.lynda.com/JavaScript-tutorials/Understanding-asyncawait-model/794146/2700194-4.html-->

---

### What is Async?

---

## Most Helpful meme

<!-- ![](imgs/CallbackMeme.png) -->
![](https://i.imgflip.com/4etnqo.jpg)

---

### What is a Promise?


---

### Dealing with Rejection

---

###  Async / Await IIFE

Async IFFE {.fragment .current-only data-code-focus=1-1}
END of Async IFFE {.fragment .current-only data-code-focus=1-1}
```javascript

(async ()=>{

})()

(async function() {
  let responses = [];
  responses.push( 
    await get( urls[0] 
    )
  )
})();
```


---

###  Async / Await IIFE
<!-- 
Async IFFE {.fragment .current-only data-code-focus=1-1}

END of Async IFFE {.fragment .current-only data-code-focus=1-1} -->

Add Try, Catch, Finally {.fragment .current-only data-code-focus=2-10}

Write your code in `Try`, Catch, Finally {.fragment .current-only data-code-focus=2-10}

Use Catch to handle the errors and reject Promises{.fragment .current-only data-code-focus=2-10}

Then in the `Finally` block handle  {.fragment .current-only data-code-focus=2-10}

Add Try, Catch, Finally {.fragment .current-only data-code-focus=2-10}

```javascript
(async ()=> {
  try {
  
  } 
  catch (error) {
     
  }
  finally {

  }
})();
```
