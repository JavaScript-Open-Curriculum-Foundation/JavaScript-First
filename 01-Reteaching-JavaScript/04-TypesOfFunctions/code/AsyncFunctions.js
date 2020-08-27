/**
 ** Asynchronous Code
 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
 * 1. Callbacks
 * 2. Promises
 * 3. Async/Await
 * 4. Async Generators
 */

/**
 ** callbacks
 https://www.dashingd3js.com/lessons/javascript-callback-functions
 */
function callback(x) {
  console.log(x);
}
function callbackFunction(var1, var2, callback1, callback2) {
  callback1(var1);	
  callback2(var2);	
}

callbackFunction( 1, 2, // var1, var2
  function (x) { console.log(x); }, // callback1
  function (x) { console.log(x); }  // callback2
);

/**
 ** Promises
*/