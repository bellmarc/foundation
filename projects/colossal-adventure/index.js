const readline = require("readline-sync");

//////////////////////
///Global variable////
// let gameOver = false

let startQuest = true
let controlDisplay = 0
const player = { //User needs properties
    name: "",
    stats: {
        hp: 500,//health points
        attack: function() {
        return randomNum(35)
        },
        inventory: ["rusty knife", " small pouch"], //player.inventory.push, current enemy.inventory goods to player
        skills: "unknown"
    }
}
// must store enemy's dropped items & save response in object vs variable player.name

/////////////////
////Functions////

//Constructor function to help generate new Enemy

function Enemy(type, hpGauge, item) {
    this.type = type
    this.hpGauge = hpGauge
    this.item = item
}

Enemy.prototype.attack = function (){
    return randomNum(35)
}

function generateEnemy(currentEnemy) {
    let number = randomNum(3)
    if (number === 0) {
        return new Enemy("common subDweller", 420, "item1")
    } else if (number === 1){
        return new Enemy ("native swampMoss", 300, "item2")
    } else {
        return new Enemy ("massive subDweller", 600, "item3")
    }
}

function fight(currentEnemy){

    while (currentEnemy.hpGauge > 0 && player.stats.hp > 0 && startQuest) {
        const userFightChoice = readline.keyInSelect(["fight", "run away"], "What will you do?")
        if (userFightChoice === 0){

        const enemyAttackPower =  currentEnemy.attack()
        let enemyHealth =  currentEnemy.hpGauge -= enemyAttackPower
        if(enemyHealth <= 0){ //enemy death
            player.stats.inventory.push(currentEnemy.item)
            enemyHealth = 0
        }
        console.log(`${player.name} attacked ${currentEnemy.type} for ${enemyAttackPower} damage. Your Enemy's current hp is ${enemyHealth}`)

        const playerAttackPower = player.stats.attack()
        let playerHealth =  player.stats.hp -= playerAttackPower
        if(playerHealth <= 0){
            playerHealth = 0
            startQuest = false
        }
        console.log(`${currentEnemy.type} attacked ${player.name} for ${playerAttackPower} damage. Your current hp is ${playerHealth}`)
        } else {
           const num = randomNum(2)
           if (randomNum === 0){
                console.log(`You barely escaped. You have ${player.stats.hp} hp remaining.` )
                break
           } else {
               console.log(`

                    Suddenly, your vision blackens, your legs are numb, you slump to the ground and as you feel your lifeforce weakening, you reach out a hand in desperation.
                                    You have died.`)
               startQuest = false
           }
        }
    }
    if (currentEnemy.hpGauge < 0) { //enemy

    }
}

//Counter functions

function randomNum(num) { //dynamic input of num
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
function walk(){
    const userChoice = readline.keyIn("Enter your action: ", {limit: 'wp'})

    if(userChoice === 'w') {
        console.log(`You are walking carefully through the subterrain.`)
        eventTrigger() //Every time player walks, an algorithm runs that determines if a wild enemy appears
    } else if (userChoice === 'p') {
        console.log(`
        Name: ${player.name}
        HP: ${player.stats.hp}
        Items: ${player.stats.inventory} `)
    }
}

//////////////
////Game/////
console.log(
            `Oh, you're awake!
             It's a wonder you've survived the fall from Terrakott above-ah...erhm..`)

player.name = readline.question("\n\t\t\tSo..what might your name be?")
console.log(`

            Oh! well hello there,  ${player.name}  !`

)

console.log(

            `Looks like you must fight your way out of the subterranean regions-unfortunately, the locals are a hostile species.`)

let questYes = readline.keyInYNStrict("\n\t\t\tAre you prepared to start your journey back to your homeland?")

if (questYes === true){
    console.log(

            `Seems like  ${player.name}  is ready to begin the journey! An adventure awaits you.` )
} else {
    console.log(

            ` ${player.name}  , are you sure you're not ready?`)
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

