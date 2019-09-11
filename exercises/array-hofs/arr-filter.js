
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
//     const numGreaterThanFive = arr.filter(function (num){
//             return num >= 5
//     })
//         return numGreaterThanFive
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2,])); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.

  function evensOnly(arr) {
    // Checking if # is divisible by  & remainder is zero then it's even
    const evenNumOnly =  arr.filter(function(num){
        return num % 2 === 0
    })
    return evenNumOnly
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


  // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

    function fiveCharactersOrFewerOnly(arr) {
        // check length of each character, ES6 version
        const fiveOrFewer = arr.filter(string => {return (string.length <= 5)})
        return fiveOrFewer
    }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


//Without ES6: function fiveCharactersOrFewerOnly(arr) {
// check length of each character
//   const fiveOrFewer = arr.filter(function(string){
//     return string.length <= 5
// })
//     return fiveOrFewer


//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToHollywood(arr){
    // your code here
    
  }
  // test
  console.log(peopleWhoBelongToHollywood([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
