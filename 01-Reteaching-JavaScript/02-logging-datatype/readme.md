---
# This file is best viewed in vscode using vscode-reveal
# https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal
title: "Logging JavaScript Datatypes"
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



### Excercise 1: Logging Primitive Types 
Step 1: Inside `0-student_files/chp1/primitives.js` type the following code  {.fragment}

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
Step 2:  Define what a variable for each **primitate** type. {.fragment .current-only data-code-focus=1-9 }

Step 2: create something a **function** called `LOGprimitive` that uses a conditional statement and the typeof operator to determine if the variable is a primitive type {.fragment .current-only data-code-focus=10-16 }

Step 3: Here we are using a **conditional if statement** refers to  cs-h


---



# Logging Datatypes
This section is still in progress...


### Learning Objectives
1. Identify primitive types and non-primitive objects with console
2. Explain the null bug and how to check for it.
3. Demonstrate conditional logic by creating JS functions


