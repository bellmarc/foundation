
// 1) Sort an array from smallest number to largest

// function leastToGreatest(arr) {
//     // compare both values in array against each other
//      const compare =   arr.sort(function (num1 , num2){
//             return num1 > num2
//         })
//         return compare
//   }

//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

  //2) Sort an array from largest number to smallest

// function greatestToLeast(arr) {
//     // comparing the num values in array with one another returning greater nums first
//     const compare = arr.sort(function (num1, num2){
//          return (num1 < num2)
//     })
//     return compare
//   }

//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


//3) Sort an array from shortest string to longest

// function lengthSort(arr) {
//     // determine which string is shortest, use sort to re-order
//     const shortestString = arr.sort(function (str1, str2){
//         //.length of string
//         return str1.length > str2.length
//     })
//         return shortestString
//   }

//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

  //4) Sort an array alphabetically

// function alphabetical(arr) {
//     const alphaOrder = arr.sort(function (firstLetter1, firstLetter2){
//         return firstLetter1 > firstLetter2
//     })
//     return alphaOrder
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//5) Sort the objects in the array by age

function byAge(arr){
    // compare values of an array of objects,
    const compareAge = arr.sort(function(arr1, arr2 ){
        console.log(arr1.name)
        return arr1.age > arr2.age

    })
        return compareAge
  }

  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]