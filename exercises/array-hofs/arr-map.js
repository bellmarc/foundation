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

function doubleNumbers(arr){
    return arr.map(function(num){
      return num * 2
    })
}
console.log(doubleNumbers([2,5,100]))


// 2) Take an array of numbers and make them strings

function stringItUp(arr){
  arr.map()



}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]