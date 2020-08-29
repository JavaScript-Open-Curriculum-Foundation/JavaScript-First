/**
 * 
### Catagories of Functions

**1. Synchronous Functions** {.fragment }
:::block
1. Function Declaration
2. Function Expression
3. Anonymous Functions
4. Arrow Functions
5. Curried Function
6. Closure
7. IFFE
{.fragment .current-only  }
:::

**2. Async Functions** {.fragment   }
:::block
1. Callbacks
2. Promises
3. Generator
4. Async / Await
5. Async Generator
{.fragment .current-only  }
:::


**2. Object Oriented Functions** {.fragment }
:::block
1. Constructor
2. Class
<!-- Add Callback and  -->
{.fragment .current-only  }
:::

 */

/**
 ** function
 */
function firstFunction(params) {
  console.log("hello " + params);
}
firstFunction("hello")

/**
 ** Arrow functions
 */
  // single line
  () => console.log("single");
  // multiline
  () => {
    console.log("multiline");
  }
  // named arrow function
  const name = (params) => {
    console.log(params,"named");
  }

/**
 ** Immediately Invoked Function Expressions (IFFY)
 * http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html
 */
  (function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
  })();

  // ReferenceError: foo is not defined
  console.log(foo);

/**
 ** Event Loop
 * 1. Arrays & Memory Heap
 * 2. Stack
 * 3. Queue
 * 4. Call Stack & Callback Queue
 * https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
 * 
 */


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
