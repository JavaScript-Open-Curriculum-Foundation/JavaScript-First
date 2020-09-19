AAhoisted = "undeclared, hoisted";
var AAA = "declared, not hoisted,  var doesn't matter as much, let/const still better";
function functionDeclaration() {
    console.log(`\n Is DECLARATION hoisted:  ${global.functionEXPRESSION} \n`);
}
var functionEXPRESSION = function () {
    console.log(`\n Is EXPRESSION hoisted:  ${global.functionEXPRESSION} \n`);
}
// Log the global object
console.log(global)
console.log("function DECLARATION are: ", global.functionDeclaration);
console.log("function EXPRESSION are: ", global.functionEXPRESSION);

// Predict the output code
functionDeclaration();
functionEXPRESSION(); 