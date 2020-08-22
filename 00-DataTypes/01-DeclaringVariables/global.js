// In Browser
/**
 * 
 */
var person = 'John Doe'; 
console.log(window.person); // global object

function name(){
  var person = 'John Doe' // function scoped
  console.log(person)
}
console.log(window.person) // undefined 

let otherPerson = "Jane Doe";
console.log(window.otherPerson); // not defined as a global object



// In Node
var person = 'John Doe';
console.log(global);

// var otherPerson = 'John Doe';
// // global["otherPerson"] = 'value';
// console.log(global);