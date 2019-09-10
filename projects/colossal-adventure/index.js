const readline = require("readline-sync");

//////////////////////
///Global variable////

let startQuest = true
let controlDisplay = 0
const player = { //User needs properties
    name: "",
    stats: {
        level: 1,
        hp: 300,//health points should be dynamic
        attack: function() {
        return randomNum(35)
        },
        inventory: ["rusty knife", "small pouch"], //player.inventory.push, current enemy.inventory goods to player
        skills: "unknown"
    }
}
// must store enemy's dropped items & save response in object vs variable player.name

/////////////////
////Functions////

//Constructor function to help generate new Enemy

function Enemy(type, hpGauge, item, playerHealthBonus) {
    this.type = type
    this.hpGauge = hpGauge
    this.item = item
    this.playerHealthBonus = playerHealthBonus
}

Enemy.prototype.attack = function (){
    return randomNum(35)
}

function generateEnemy(currentEnemy) {
    let number = randomNum(4)
    if (number === 0) {
        return new Enemy("common subDweller", 220, "sacred jewel", randomNum(60))
    } else if (number === 1){
        return new Enemy ("native swampMoss", 150,  "swamp water elixir", randomNum(40))
    } else if (number === 2){
        return new Enemy ("massive subDweller", 500, "sword", randomNum(100))
    } else  {
        return new Enemy ("savage beast", 280, "sharp claw", randomNum(80))
    }
}

function fight(currentEnemy){

    while (currentEnemy.hpGauge > 0 && player.stats.hp > 0 && startQuest) {
        const userFightChoice = readline.keyInSelect(["fight", "run away"], "What will you do?")
        if (userFightChoice === 0){

        const enemyAttackPower =  currentEnemy.attack()
        currentEnemy.hpGauge = Math.max(currentEnemy.hpGauge - enemyAttackPower, 0) //ensures # will not be > 0
        let enemyHealth = currentEnemy.hpGauge

        console.log(`
        ${player.name} attacked the ${currentEnemy.type} for ${enemyAttackPower} damage.
        Your Enemy's current hp is now ${enemyHealth}.`)

        if(enemyHealth <= 0){ //enemy death

            player.stats.inventory.push(currentEnemy.item)
            console.log (`
            You've defeated the ${currentEnemy.type} and it dropped a ${currentEnemy.item}!
                        You store this item in your pouch.`)
            addPlayerHealth(currentEnemy) //enemy adds health to player upon defeat
        } else {
            const playerAttackPower = player.stats.attack()
            player.stats.hp = Math.max(player.stats.hp - playerAttackPower, 0)

            console.log(`The ${currentEnemy.type} attacked ${player.name} for ${playerAttackPower} damage. Your current hp is ${player.stats.hp}.`)
        }

        if(player.stats.hp <= 0){

            console.log(`
            ${player.name} drops to one knee but had suffered too much damage.
            The ${currentEnemy.type} delivers the final blow and you drop to the ground, lifeless.
            Game Over.`)
            startQuest = false
        }

        } else {
           const num = randomNum(2)
           if (num === 0){
                console.log(`
                You barely escaped. You have ${player.stats.hp} hp remaining.` )
                break
           } else {
               console.log(`

                    You attempt to escape. Suddenly, your vision blackens, your legs are numb, you slump to the ground and as you feel your lifeforce weakening,
                    you reach out a hand in desperation.
                                    You have died.`)
               startQuest = false
           }
        }
    }
}

//Counter functions

function randomNum(num) { //dynamic input of num determines result
    return Math.floor(Math.random()* num)
}

//After player defeats enemy, random # of HP is added to player
function addPlayerHealth(currentEnemy){
    console.log(currentEnemy)
    let playerHpBoost = currentEnemy.playerHealthBonus + player.stats.hp
    let newPlayerHp = playerHpBoost + player.stats.hp
    console.log (
                `*** ${player.name} received ${playerHpBoost} hp from the ${currentEnemy.type}! ***

                Your current hp is: ${newPlayerHp} `)
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
    const randomActionNum = randomNum(4)
    if (randomActionNum === 0){
        console.log( `A hostile creature has appeared`)// leads to fight
        // console.log(enemies.commSubDweller)
        const currentEnemy = generateEnemy()
        fight(currentEnemy);//previously encounter(CE)
    } else if (randomActionNum === 1){
        console.log(`
        You keep on walking, armed, and wary of your surroundings.`)
    } else if (randomActionNum === 2){
        console.log(`
        You find a shiny object on the floor. It could be useful so you store it in your pocket.`)
    } else {
        console.log(`
        You are walking carefully through the subterrain. It seems eerily quiet...`)
    }
}

// Walk function
function walk(){
    const userChoice = readline.keyIn("Enter your action: ", {limit: 'wp'})

    if(userChoice === 'w') {
        eventTrigger() //Every time player walks, an algorithm runs that determines if a wild enemy appears
    } else if (userChoice === 'p') {// need to add HpBoost after battle
        console.log(`
        Name: ${player.name}
        Level: ${player.stats.level}
        HP: ${player.stats.hp}
        Items: ${player.stats.inventory.join(", ")} `)
    }
}

//////////////
////Game/////

console.log(
            `

    Oh, you're awake!

        It's a wonder you've survived the fall from Terrakott above-ah...erhm..`)

player.name = readline.question("\n\t\t\tSo..what might your name be?")
console.log(`

    Oh! well hello there, ${player.name}!`

)

console.log(
            `
            Looks like you must fight your way out of the subterranean regions.

            However, the locals here are a hostile species.`)

let questYes = readline.keyInYNStrict("\n\t\t\tAre you prepared to start your journey back to your homeland?")

if (questYes === true){
    console.log(
            `
            It seems like  ${player.name}  is ready to begin the journey! An adventure awaits you.` )
} else {
    console.log(

            ` ${player.name}  , are you sure you're not ready?`)
}

//The console will ask the user to enter a "w" to walk
while (startQuest){
    if (controlDisplay < 3) {
        console.log(`

        Press 'w' to walk | Hit 'p' to view Stats
        `)
        controlDisplay ++;
        walk();
    } else {
        walk();
    }
}

