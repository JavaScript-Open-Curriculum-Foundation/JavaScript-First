/**
 * Debugging JavaScript TIPS
*/
// Module level variables (Fake globals) to aid debugging
// Allows you turn on/off various types of debugging.
// Always set these to false in pre-production and automatically strip if statements
const DEBUG        = false;   // Enables logs on the script, 
const DebugPrime   = false;   // Enables logs on the script, 
const DebugObj     = false;   // Enables logs on the script, 
const TypeCheck    = false;   // Enabled type-based logs


VAR = "you hoisted me...";
// BEWARE
// Null will log as an object due to an unfixable bug in the language...
// 1. https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
// 2. https://2ality.com/2013/10/typeof-null.html#:~:text=In%20JavaScript%2C%20typeof%20null%20is,it%20would%20break%20existing%20code.&text=The%20data%20is%20a%20reference%20to%20an%20object.
if(DEBUG) console.log(vNull);                   // null
if(DEBUG) console.log("lies... ",typeof vNull); // object


/**
 * PRIMITIVE TYPES
 * IF undefined or a number needs to be incremented use let, 
 * ALWAYS use const to avoid reassignment based mutations, 
*/
const vString = "some text"; 
const vNumber = 10; 
const vBoolean = false; 
const vSymbol = Symbol('foo');
const vBigInt = BigInt(9007199254740991);
const vNull = null;
let vUndefined;



/**
 * NON-PRIMITIVE "OBJECTS"
 * Anything not mentioned above.
 * Assume it will mutate unless you lock it down.
*/
  const vObjectObj = {
    property: "Value"
  }
  const vArrayObject = [
    1, 
    2.1, 
    "string",
  ]

  function functionObject(params) {}

  // Syntactical "salt" for a function,
  // Does NOT use object-oriented inheritance, still prototype-based inheritance
  class ClassObj {}  



const logType = (VAR, tracer=false) => {
  const LOG = console.log;
  // check if the variable is a primitive type ?
  ( typeof VAR==="string"||typeof VAR==="number"||typeof VAR==="boolean"||typeof VAR==="symbol"||typeof VAR==="bigint"
    && typeof VAR !=="object" && VAR !==null && VAR !==undefined
  ) ?
      LOG("\n variable is a PRIMITIVE: ", typeof VAR, "\n Value: ",VAR) 
    :
      // check if variable is an array ?
      ( Array.isArray(VAR) ) ?  
        // if it is an array, log it with table
        LOG("variable is an ARRAY Object: \n") & console.table(VAR) 
      :
      // check if variable is object
      (VAR !==null && typeof VAR === "object")  ?
      LOG(`
      type: ${VAR}
      frozen: ${Object.isFrozen(VAR)}
      sealed: ${Object.isSealed(VAR)}
      data:
      ${JSON.stringify(VAR)}
      `): 
   
        // use assert to avoid needless longer ternary nesting...
        // throw an error if you didn't seal or freeze your object 
        // & LOG("frozen ?") & console.assert(Object.isFrozen(VAR)) & LOG("sealed ?") & console.assert(Object.isSealed(VAR)) & LOG('\n'):
      // check if variable is function
      (typeof VAR === "function")  ?
        LOG("\n variable is an function or class: \n", typeof VAR, "\n", "value", VAR)  :
        // Null Check
        // please note there is a bug where it lies and registers the typeof as an object, so if you see object, it means its null
        (VAR===null) ? 
            LOG("\n must be null: ", "'",typeof VAR,"'") 
        :
        LOG("\n must be undefined... \n");
  // Tracer?
  (tracer===true) ? console.trace(VAR): "";
}

// check if it is a "class"
// auto instanceof Car

// logType( vString );
// logType( vNumber );
// logType( vBoolean );
// logType( vSymbol );
// logType( vBigInt ); 

logType( vObjectObj );
logType( vArrayObject );
// logType( functionObject );
// logType( ClassObj );

logType( vNull );
logType( vUndefined, true);




const _type = (VAR) => {
  if(TypeCheck && VAR !=null && VAR !=undefined)  console.log("typeof: ", typeof VAR);
}

const _prime = (VAR) => {
  if(DEBUG) console.log(`Logging...\n: ${VAR}`);
}
const _obj = (VAR) => {
  if(DebugObj) console.log(`my object is: ${JSON.stringify(obj)}`);
}
const _array = (VAR) => {
  if(DebugObj && Array.isArray(VAR)) {
    console.table(VAR);
  } 
}



_array(vArrayObject);


// this may not work?
  // function _die(VAR) {
  //   if(EXTERMINATOR) console.log(VAR);
  //   if(EXTERMINATOR) debugger;  
  // }