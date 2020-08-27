/**
 ** Resources:
 * https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
 */


var myArgs = process.argv.slice(2);
var myArg2 = process.argv.slice(3);

console.log(myArgs);
console.log(myArg2);

/**
 * 
 * 
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

a = rl.question("value of a", function(a){
  if(a) return a, rl.close(a);
} 
);
// console.log(a);
// rl.question("Are you ready to play a game? ", 
//   function(condition) {
//     if (condition==="yes") {
//       rl.question("Where do you live ? ", 
//         function(country) {
//             console.log(`You are a citizen of ${country}`);
//             rl.close(); // close the program.
//         }
//       );
//     } else {
//       console.log('Good Bye World!')
//     }
//   }
// );



rl.on("close", function() {
  console.log(a);
    // console.log("\nThanks for playing, BYE !!!");
    process.exit(0);
});
