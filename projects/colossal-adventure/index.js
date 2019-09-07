const readline = require("readline-sync");

//////////////////////
///Global variable////
// let gameOver = false

let startQuest = true
let controlDisplay = 0
const player = { //User needs properties
    name: "",
        stats: {
        hp: 400,//health points
        attack: function() {
            return randomNum(35)
        },
        inventory: [], //player.inventory.push, current enemy.inventory goods to player
        skills: "attack",
}
}

// must store enemy's dropped items & save response in object vs variable player.name

/////////////////
////Functions////

//Constructor function to help generate new Enemy

function Enemy(type, hpGauge) {
    this.type = type
    this.hpGauge = hpGauge
}

Enemy.prototype.attack = function (){
    return randomNum(35)
}

function generateEnemy(currentEnemy) {
    if (randomNum(2)=== 0) {
        return new Enemy("common subDweller", 420)
    } else {
       return new Enemy ("native swampMoss", 200)
}
}

function fight(currentEnemy){

    while (currentEnemy.hpGauge > 0 && player.stats.hp > 0 && startQuest) {
        const userFightChoice = readline.keyInSelect(["fight", "run away"], "What will you do?")
        if (userFightChoice === 0){

        const enemyAttackPower =  currentEnemy.attack()
       console.log(`${player.name} attacked ${currentEnemy.type} for ${enemyAttackPower} your Enemy's current hp is ${currentEnemy.hpGauge -= enemyAttackPower}`)

       const playerAttackPower = player.stats.attack()
       console.log(`${currentEnemy.type} attacked ${player.name} for ${playerAttackPower} your current hp is ${player.stats.hp -= playerAttackPower}`)
        } else {
           const num = randomNum(2)
           if (0 === 0){
                console.log(`You barely escaped. you have ${player.stats.hp} hp remaining` )
                break
           } else {
               console.log("The enemy caught you-You are dead.")
               startQuest = false
           }
        }

       }
}

// console.log(commSubDweller) testing if it displays: works

// const enemy = generateEnemy(){
//     console.log(commSubDweller)
// }
//create two functions one for damage to player & one for damage to monster

// function playerDamage() { //currentEnemy.attackPower
//     if (player.a)
// }

//Counter functions

function randomNum(num){ //dynamic input of num
    return Math.floor(Math.random()* num)
}

// function encounter(currentEnemy) {
//     while (currentEnemy.hpGauge > 0 && player.stats.hp > 0 && startQuest){
//         //decrease hpGauge after attack power is determined
//         const playerDecision = readline.keyInSelect(["run away", "fight"], "You've encountered an enemy. What will you do?")
//        if ( playerDecision === 0){ //gen randomNum
//         const random = randomNum(2)

//             if (random === 0){
//                 console.log("You got lucky & escaped")
//                 break
//             } else {
//                 console.log("You didn't escape")
//                 startQuest = false
//             }
//        }
//        else {
//          fight(currentEnemy)
//          break
//        }
//     }
// }

//generate Enemy function
function eventTrigger(){
//Random Number for enemy appearance
    const randomActionNum = randomNum(3)
    if (randomActionNum === 0){
        console.log( `An enemy has appeared`)// leads to fight
        // console.log(enemies.commSubDweller)
        const currentEnemy = generateEnemy()
        fight(currentEnemy);//previously encounter(CE)
    } else if (randomActionNum === 1){
        console.log(`You keep on walking, armed, and wary of your surroundings.`)
    } else if (randomActionNum === 2){
        console.log(`You find a shiny object on the floor. It seems like it could be useful so you store it in your pocket.`)
    } else {
        console.log (`You continue on the path.`)
    }
}

// Walk function
function walk(){ //add limit p for inventory print later
    const userChoice = readline.keyIn("Enter your action: ", {limit: 'wp'})

    if(userChoice === 'w'){
        console.log(`You are walking carefully through the subterrain.`)
        eventTrigger() //Every time player walks, an algorithm runs that determines if a wild enemy appears
    } else if (userChoice === 'p'){
        console.log(player.stats)
    }
}


//////////////
////Game/////
console.log(
            `Oh, you're awake!
             It's a wonder you've survived the fall from Terrakott above-ah...erhm..`);

player.name = readline.question("\n\t\t\tSo..what might your name be?");
console.log(`

            Oh! well hello there,  ${player.name}  !`

);

console.log(

            `Looks like you must fight your way out of the subterranean regions-unfortunately, the locals are a hostile species.`)

let questYes = readline.keyInYNStrict("\n\t\t\tAre you prepared to start your journey back to your homeland?");

if (questYes === true){
    console.log(

            `Seems like  ${player.name}  is ready to begin the journey! An adventure awaits you.` );
} else {
    console.log(

            ` ${player.name}  , are you sure you're not ready?`);
}

//The console will ask the user to enter a "w" to walk
while (startQuest){
    console.log(controlDisplay)
    if (controlDisplay < 3) {
        console.log(`Press 'w' key to walk or Hit 'p' to print your Stats`)
        controlDisplay ++;
        walk();
    } else {
        walk();
    }
}

