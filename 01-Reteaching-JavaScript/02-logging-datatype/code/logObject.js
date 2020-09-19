const vObjectObj = {property: "Value"}
const vArrayObject = [1, 2.1, "string"]

function LOGobject(VAR){
  if( VAR !==null && typeof VAR === "object") {
    console.log(`type: ${VAR}
    frozen: ${Object.isFrozen(VAR)}
    sealed: ${Object.isSealed(VAR)}
    data:
    ${JSON.stringify(VAR)}
    `)
  }
  if ( Array.isArray(VAR) ) console.log("\n Object is an Array: ", typeof VAR, "\n Value: ",VAR);
}

LOGobject(vObjectObj);
LOGobject(vArrayObject);