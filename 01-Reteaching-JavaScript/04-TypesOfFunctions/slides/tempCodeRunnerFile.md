 ```javascript
function functionDeclaration(params) {
    console.log(`hello ${params} \n`);
}
functionDeclaration("hello");
// console.log(global) // not hoisted in node.js 
console.log(window.functionDeclaration("hello")) 
 ```