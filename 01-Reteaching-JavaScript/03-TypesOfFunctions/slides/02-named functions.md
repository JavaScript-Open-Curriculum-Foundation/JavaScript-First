


### Named Function 

 ```javascript
const namedFunction = function (params) {
    console.log("hello " + params);
}
namedFunction("hello");
// console.log(window.namedFunction("hello")) //  hoisted in browser
console.log(global.namedFunction("hello")) // not hoisted in node.js
 ```
**Named Functions** are not hoisted. {.fragment .current-only data-code-focus=1-1}


