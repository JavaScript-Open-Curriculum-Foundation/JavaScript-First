/**
 ** Resources:
 * https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
 * 
 * https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
 */






/**
 * Parsing the Arguements 
 */

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
var myArgs = process.argv.slice(2);
// console.log(myArgs[0]==="no")

if(myArgs[0]==="yes") console.log(`Good! Lets start...`);
if(myArgs[0]==="no") console.log(`Too Bad! Good Bye cruel World...`);

