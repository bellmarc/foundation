const readline = require("readline-sync");


console.log("Oh, you're awake! It's a wonder you've survived the fall from TerraKott above-ah...");

let userName = readline.question("What might your name be?");
console.log("Oh! well hello there, " + userName + "!");

console.log("Looks like you must fight your way out of the subterranean regions-the locals are a hostile species.")

let questYes = readline.keyInYNStrict("Are you prepared to start your journey back to your homeland?");
 if (questYes === true){
      console.log("Seems like " + userName  + " is ready to begin his journey! An adventure awaits you." );
  } else if (questYes === false) {
      console.log(userName + ", are you sure you're not ready?" )
      console.log(questYes);
  };
//The console will ask the user to enter a "w" to walk



  walkKey = true;
  while (walkKey === true) {
    input = readlineSync.question('Something$<( or "!!" as ")history_m1(")>: ');
    console.log('-- You said "' + input + '"');
  }




