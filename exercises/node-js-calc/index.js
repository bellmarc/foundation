const readline = require("readline-sync")

//Created functions that performs the basic math operations

function addition (firstNum , num2){
    return firstNum + num2
}

function multiply (num1 , num2){
    return num1  * num2
}

function divide (num1 , num2){
    return num1 / num2
}

function subtract (num1, num2){
    return num1 - num2
}
//Grab value (user Input)
let num1 = Number(readline.question("What is your first number?"))
let num2 = Number(readline.question("What is your second number?")
)

const operations = ["add", "multiply", "divide", "subtract"]
let answer = readline.keyInSelect(operations, "What would you like to do with your numbers?")

//Output the results to user
if (answer === 0 ){
    console.log("The result is " + addition(num1, num2))
} else if (answer === 1){
    //multiply
    console.log("The result is " + multiply(num1, num2))
} else if (answer === 2) {
    //divide
    console.log("The result is " + divide(num1, num2))
} else {
    //subtract
    console.log("The result is " + subtract(num1, num2))
}

