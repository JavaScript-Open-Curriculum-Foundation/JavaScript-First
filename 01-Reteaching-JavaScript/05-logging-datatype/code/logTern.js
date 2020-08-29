let vUndefined;
const vNull = null;

const vString = "some text"; 
const vNumber = 10; 
const vBoolean = false; 
const vSymbol = Symbol('foo');
const vBigInt = BigInt(9007199254740991);

const vObjectObj = {property: "Value"}
const vArrayObject = [1, 2.1, "string"]
function functionObject(params) {}
async function functionAsync(params) {}
class ClassObj {} 


const LOG = (VAR) => {
  const LOG = console.log;
  
  // 1. check if the variable is a primitive type and not an object ?
  ( typeof VAR==="string"||typeof VAR==="number"||typeof VAR==="boolean"||typeof VAR==="symbol"||typeof VAR==="bigint"
    && typeof VAR !=="object" && VAR !==null && VAR !==undefined
  ) ?
      LOG("\n PRIMITIVE: ", typeof VAR, "\n Value: ",VAR) 
    :
  // 2. ELSE, Check what kind of object it is
      // A. check if variable is an array ?
      ( Array.isArray(VAR) ) ?  
        // if it is an array, log it with table
        LOG(`type: Array Object,
        data:
        `)& console.table(VAR)
      :
      // B. check if variable is object object and the state of the object
      (VAR !==null && typeof VAR === "object")  ?
      LOG(`type: ${VAR}
      frozen: ${Object.isFrozen(VAR)}
      sealed: ${Object.isSealed(VAR)}
      data:
      ${JSON.stringify(VAR)}
      `)
      : 
      // C. check if variable is function
      (typeof VAR === "function")  ?
        LOG(`type: ${VAR},
        frozen: ${Object.isFrozen(VAR)},
        sealed: ${Object.isSealed(VAR)}
        `)
      :
      // D. Null BUG Check
        // due to the typeof null bug we, we check the value instead of using the operator
        (VAR===null) ? 
            LOG("\n must be null: ", "'",typeof VAR,"'") 
      :
      // E. Log as undefined
        LOG("\n must be undefined... \n");
} 
