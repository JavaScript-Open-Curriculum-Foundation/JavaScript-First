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

LOGprimitive(vObjectObj)
LOGprimitive(vArrayObject)
LOGprimitive(functionObject)
LOGprimitive(functionAsync)
LOGprimitive(ClassObj)