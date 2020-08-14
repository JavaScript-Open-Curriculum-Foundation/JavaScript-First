---
theme : "night"
transition: "slide"
highlightTheme: "dracula"
slideNumber: true
title: "Non-Primitive Data Types"
---


### Non-Primitive Types

```javascript
const vObjectObj = {
  property: "Value"
}

const vArrayObject = [
  1, 
  2.1, 
  "string",
]

function functionObject(params) {}

async function functionAsync(params) {}

class ClassObj {}  
```
<!-- These are a few of the most common non-primitive types. -->

This is an [Object Object]. {.fragment .current-only data-code-focus=1-3}

The **Name** is "property" and **Value** is "Value" . {.fragment .current-only data-code-focus=2-2}


This is an [Array Object]. {.fragment .current-only data-code-focus=5-9}

This is an Function Object. {.fragment .current-only data-code-focus=11-11}

This is an Async Function Object, which returns a **promise**. {.fragment .current-only data-code-focus=13-13}

This is an Class, which is syntac "sugar" for a **function**. {.fragment .current-only data-code-focus=15-15}


<!-- <span class="fragment">... a</span> -->
---
