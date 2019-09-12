let readline = require("readline-sync")

const options = ["Insert a word and definition", "Look Up Word", "Quit"]

let isRunning = true
//Have an empty object
const dictionary = {

}
//Write a program that allows a user to create their own dictionary.
//console.log("Fired Up.")

const whatToDo = () => {
    const userOptions = readline.keyInSelect(options, "What do you want to do?")

    if(userOptions === 0) {
        console.log("You selected, Option One")
        addWord()
    } else if (userOptions === 1){
        console.log("You selected, Option Two")
        findWord()
    } else {
        console.log("Cancel")
        return isRunning = false
    }
}

//What we need to do next
const addWord = () => {
    //ask a question, have it input as key in Object
    //ask  definition, input as value in Object
    const currentWord = readline.question("Enter New Word:")
    const currentDefinition = readline.question("Enter New Definition:")

    currentWord.toLowerCase()
    currentDefinition.toLowerCase()
    //move added Word to dictionary, bracket not dot notation
    dictionary[currentWord] = currentDefinition
    //console.log(`${currentWord}: ${currentDefinition}`)
    console.log(dictionary)
    //check if key:value is already there
}

const findWord = () => { //find()
    //ask Question & compare answer against object
    const searchWord = readline.question("What word do you want to find?")
//checks if this key is present then return definition, dictionary
    if (dictionary[searchWord]) { //if word is there
        //console.log dictionary word
        console.log(dictionary[searchWord])
    } else { //if word is not there
        console.log("The word is not in the dictionary.")
    }
}

while(isRunning) {
    isRunning = whatToDo()
}