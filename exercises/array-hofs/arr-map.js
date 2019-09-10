//Array Map Exercises, Higher Order Function
//.map() returns new array w/ change made to every item from original array

// 1) Make an array of numbers that are doubles of the first array


// function doubleNumbers(arr){
//      //create a new Array set it equal to the function that's called as an argument above

// const arr = [2, 5, 100]

// function doubleNumbers(){
//   let mappedArray = arr.map(function(num) {

//   //reads the current nums passed as arguments
//   return num * 2
//   });
//   console.log(mappedArray)
// }

// function doubleNumbers(arr){
//     return arr.map(function(num){
//       return num * 2
//     })
// }
// console.log(doubleNumbers([2,5,100]))


// 2) Take an array of numbers and make them strings

// function stringItUp(arr){ //ned to change vlue to string
//     let newMap = arr
//       return newMap.toString() //turns array to String
// }

// // console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// const arr = [2, 5, 100]
// newArray = arr.map(function(value){ //anon fcn
//     return value.toString() //turns array to String
// })

// console.log(newArray); // ["2", "5", "100"]

// function newArray(arr){
//   let bacon = arr.map(function(value){ //anon fcn
//     return value.toString()
//   })

//   return bacon
// }
// console.log(newArray([2, 5, 100]))

// function capitalizeNames(arr){

//    let captName = arr.map(function(name){
//       let newName = name.toLowerCase()  //Read right to left
//       newName = newName.slice(1, newName.length)
//       console.log(newName)
//       newName = name[0].toUpperCase().concat(newName)

//      return newName

//   })
//     return captName
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//What do I want to do? - How do I do this?
//Write it out!!!!



// const people = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]


// function namesOnly(arr){

//   const names = arr.map(function(personObj){ //loops through & gives person Object
//     //tell it what to return from person object
//     return personObj.name
//   })
//     return names
// }
// console.log(namesOnly(people))

//5) Make an array of strings of the names saying whether or not they can go to The Matrix (based on age)

function makeStrings(arr){ // similar to arr[i] for each item in array provide me this so I can do smt w/ it
    const personObjects = arr.map(function(person){
      if (person.age > 21){
        return person.name + " can go to Matrix"
      } else {
        return person.name + " can NOT go to Matrix"
      }
    })

    return personObjects

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))



