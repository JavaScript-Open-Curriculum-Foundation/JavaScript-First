const vNull = null;
const vObjectObj = {property: "Value"}
const vArrayObject = [1, 2.1, "string"]

function LOGnull(VAR){
  if(VAR===null){
    return console.log(`
    Value: ${VAR}
    Typeof: ${typeof VAR}
    ===: ${VAR===null}
   `)
  }
  else{ return false, console.log("Not NULL !") }
}
// LOGnull(vNull);
LOGnull(vObjectObj);
// LOGnull(vArrayObject);