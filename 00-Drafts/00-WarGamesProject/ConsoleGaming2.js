/**
 ** Resources:
 * https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
 */


var myArgs = process.argv.slice(2);



/**
 * 
 * 
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Are you ready to play a game? ", 
  function(condition) {
    if (condition==="yes") {
      rl.question("Where do you live ? ", 
        function(country) {
            console.log(`You are a citizen of ${country}`);
            rl.close(); // close the program.
        }
      );
    } else {
      console.log('Good Bye World!')
    }
  }
);



rl.on("close", function() {
    console.log("\nThanks for playing, BYE !!!");
    process.exit(0);
});



const USA = 
` ,------~~v,                
|'         Ż\   ,__/Ż||    
/             \,/     /     
|                    /      
\                   |       
\                 /        
 ^Ż~_            /         
     '~~,  ,Ż~Ż\ \         
         \/     \/         
                                         
  UNITED STATES    `;

const USSR = `
              _--^\
            _/    /,_
   ,,   ,,/^      Ż  vŻv-__
   |'~^Ż                   Ż\
 _/                     _  /^
/                   ,~~^/|ŻŻ
|          __,,  v__\   \/
 ^~       /    ~Ż  //
   \~,  ,/         Ż
      ~~

      SOVIET UNION`;