/**
 * Resources:
 * 1. https://flaviocopes.com/javascript-iife/
 * 2. https://stackabuse.com/javascripts-immediately-invoked-function-expressions/
 * 3. https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
 */



(   // open IIFE
    // Inner Anonymous Function
    function () { 
        var tmp = "something";
        console.log(tmp);
        return tmp;
    }
()  // p
);  // close IIFE


/**
 ** Passing Data
 */
(   // open IIFE

    // Inner Anonymous Function
    function (data) { 
    
        var tmp = data;  // not a global variable
        console.log(tmp);
    }
("something else")
);  // close IIFE

// Arrow function
(() => {
    /* */
  })()


/**
 * with unary operators
 */

+function () {
    // Code that runs in your function
    console.log("+");
}();

-function () {
    // Code that runs in your function
    console.log("-");
}();

!function () {
    console.log("!");
    // Code that runs in your function
}();

~function () {
    // Code that runs in your function
    console.log("~");
}();

void function () {
    // Code that runs in your function
    console.log("void");
}();



for (var i = 1; i <= 5; i++) {
    (function (step) {
        setTimeout(
            () => console.log(`I reached step ${step}`), 
            100 * i
        );
    })(i);
}