---
title: "Logging Data Types"
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



#### Putting it All Together

```javascript
const LOG = (VAR) => {
  const LOG = console.log;
  ( 
    typeof VAR==="string" || typeof VAR==="number" ||
    typeof VAR==="boolean"||typeof VAR==="symbol"  ||
    typeof VAR==="bigint"
    && typeof VAR !=="object" && VAR !==null && VAR !==undefined
  ) ?
      LOG("\n PRIMITIVE: ", typeof VAR, "\n Value: ",VAR) 
    :
      ( Array.isArray(VAR) ) ?  
        LOG(`type: Array Object,
        data:
        `)& console.table(VAR)
      :
      (VAR !==null && typeof VAR === "object")  ?
      LOG(`type: ${VAR}
      frozen: ${Object.isFrozen(VAR)}
      sealed: ${Object.isSealed(VAR)}
      data:
      ${JSON.stringify(VAR)}
      `)
      : 
      (typeof VAR === "function")  ?
        LOG(`type: ${VAR},
        frozen: ${Object.isFrozen(VAR)},
        sealed: ${Object.isSealed(VAR)}
        `)
      :
        (VAR===null) ? 
            LOG("\n must be null: ", "'",typeof VAR,"'") 
      :
        LOG("\n must be undefined... \n");
} 
```
<!-- These are a few of the most common non-primitive types. -->

Step 1: Create an arrow function called `LOG(){}` {.fragment .current-only data-code-focus=1-1}

Step 2: Create a local variable to reassign console.log to `LOG`. {.fragment .current-only data-code-focus=2-2}

Step 3: Use a [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to
check if the variable is a primitive type and not an object ? {.fragment .current-only data-code-focus=3-8}

Step 4: Conditional the Operator, we'll first check using the [typeof Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), which will return a **string** of the data type.
<!-- {.fragment .current-only data-code-focus=2-2} -->

3. ELSE, Check what kind of object it is. {.fragment .current-only data-code-focus=2-2}

4. check if variable is an array ? {.fragment .current-only data-code-focus=5-9}

This is an Function Object. {.fragment .current-only data-code-focus=11-11}

:::block

ELSE, Check what kind of object it is
 A. check if variable is an array ?
 if it is an array, log it with table
 B. check if variable is object object and the state of the object
 C. check if variable is function
 D. Null BUG Check
 due to the typeof null bug we, we check the value instead of using the operator
 E. Log as undefined {.fragment .current-only data-code-focus=13-13}

{.fragment .current-only data-code-focus=11-11}
:::



<!-- <span class="fragment">... a</span> -->
---




