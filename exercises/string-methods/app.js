//Make a function that will return any given string into all caps followed by the same string all lowercase.

// function capitalizeAndLowercase(str){
//     let string = str.toUpperCase();
//     // console.log(string);
//     let string2 = str.toLowerCase();
//     // console.log(string2);
//     return string + string2;

// }
// //let str = "company";
// console.log(capitalizeAndLowercase(str));
//     capitalizeAndLowercase("seaworld");

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor()
let cat = "Something good";

function findMidIndex(string) {//param must match str.length
    let dog = string.length / 2;
    let midNum = Math.floor(dog);
    console.log(midNum);
        return midNum;
}
    console.log(findMidIndex(cat));


// Make a function that uses slice() and the other functions you've written to return the first half of the string

// function firstHalfStr(){
//  console.log(name.slice(0, name.indexOf(str)));
// }
//regex global modifier to replace lower/uppercase

// let str = "seaworld";

// let regex =