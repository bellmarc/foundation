
const readline = require("readline-sync");

console.log ("After getting lost, you find yourself in a dark room and a small glimpse of moonlight shining through the keyhole of a door that is close by.");

//Present user options
options = ["Search for the key", "Open the door", "Put your hand in the hole" ]

hasKey = false;

// They can't open the door unless they find the key first. (add conditional/loop)while (isAlive =  true){

while (true){
let response = Number(readline.keyInSelect(options, "What do you decide to do?"))

  if(response === 0){
        console.log("You searched for a key and found one lying on the ground buried underneath a pile of stones.");
        hasKey = true;
    } else if (response === 1) {
        if (hasKey === true){
            console.log ("The door opens, you have escaped!")
        } else {
            console.log ("You need to find the key first!")
        }
    } else {
        console.log(("You put your hand in the hole and die. Game over."))

    }
}


















// switch (response[0]){

//     case response[0]:
//       console.log("You searched for a key and found one lying on the ground buried underneath a pile of stones.");

//     case response[1]:
//        console.log("You attempted to open the door but to no avail.");

//     case response[2]:
//         console.log("You are dead. Game over."); //Game over if they put their hand in the hole!

//      default:
//      console.log("Nothing happens.");

// }

//Present user more options
// options2 = ["Unlock the door","Put your hand in the hole" ]
// let response2 = Number(readline.keyInSelect(options, "What will you do this time?"))

// switch (response2){
//     case response2[1]:
//     console.log("You unlocked the door. Congrats you made your escape.");
//     break;
//     case response2[2]:
//     console.log("You are dead. Game over.");
//     break;
//     default:
//     console.log("Nothing happens.");
// }