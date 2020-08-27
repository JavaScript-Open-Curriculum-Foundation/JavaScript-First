const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const log = console.log;
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


      
rl.question("LOGON: ", 
        function (condition) {
          switch (condition) {
            case 'Help games':
                console.log(`'GAMES' REFERS TO MODELS, SIMULATIONS AND GAME WHICH HAVE TACTICAL AND STRATEGIC APPLICATIONS.
                
                List Games
                FALKEN'S MAZE 
                BLACK JACK 
                GIN RUMMY 
                HEARTS 
                BRIDGE 
                CHECKERS 
                CHESS 
                POKER 
                FIGHTER 
                COMBAT 
                GUERRILLA 
                ENGAGEMENT 
                DESERT 
                WARFARE 
                AIR-TO-GROUND ACTIONS 
                THEATERWIDE TACTICAL WARFARE 
                THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE
        
                GLOBAL THERMONUCLEAR WAR
                `);
                rl.question("PLEASE ENTER YOUR SELECTION: ", 
                  function(games) {
                    GAMES(games)
                    // rl.close(); // close the program.
                  }
                );
                break;
            case 'joshua':
              rl.question("GREETING PROFESSOR FALKEN \n\n", 
                  function () {
                    rl.question("HOW ARE YOU FEELING TODAY? \n\n",
                      function(){
                        rl.question("EXCELLENT. IT'S BEEN A LONG TIME. CAN YOU EXPLAIN THE REMOVAL OF YOUR USER ACCOUNT NUMBER ON 6/23/73?",
                          ()=> log('hi')
                        );
                      }
                    );
                  }
                // function(country) {
                //     console.log(`You are a citizen of ${country}`);
                //     rl.close(); // close the program.
                // }
              );
              break;
            default:
                console.log('Sorry, that is not something I know how to do.');
            }
          
        }
);

const CHESS = () => console.log("WOULDN'T YOU PREFER A GOOD GAME OF CHESS?");

function GAMES(condition) {
  if (condition==="GLOBAL THERMONUCLEAR WAR") {
    console.log("WOULDN'T YOU PREFER A GOOD GAME OF CHESS")
  }
  if (condition==="CHESS") CHESS;
  if (condition==="FALKEN'S MAZE") CHESS;
  if (condition==="BLACK JACK") CHESS;
  if (condition==="GIN RUMMY") CHESS;
  if (condition==="HEARTS") CHESS;
  if (condition==="BRIDGE") CHESS;
  if (condition==="CHECKERS") CHESS;
  if (condition==="POKER") CHESS;
  if (condition==="FIGHTER") CHESS;
  if (condition==="COMBAT") CHESS;
  if (condition==="GUERRILLA") CHESS;
  if (condition==="ENGAGEMENT") CHESS;
  if (condition==="DESERT")CHESS;
  if (condition==="WARFARE") CHESS;
  if (condition==="AIR-TO-GROUND ACTIONS") CHESS;
  if (condition==="THEATERWIDE TACTICAL WARFARE") CHESS;
  if (condition==="THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE") CHESS;
  if (condition==="CHECKERS") CHESS;
}

rl.on("close", function() {
  console.log("\nThanks for playing, BYE !!!");
  process.exit(0);
});


