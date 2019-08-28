//Make a function that will return any given string into all caps followed by the same string all lowercase.

// function capitalizeAndLowercase(str){
//     let string = str.toUpperCase();
//     // console.log(string);
//     let string2 = str.toLowerCase();
//     // console.log(string2);
//     return string + string2;

// }
// let str = "seaworld";
// console.log(capitalizeAndLowercase(str));


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor()
// let cat = "Something good";

// function findMidIndex(string) {//param must match str.length
//     let cat = string.length / 2;
//     let midNum = Math.floor(cat);
//     //console.log(midNum);
//         return midNum;
// }
//     console.log(findMidIndex(cat));

// Make a function that uses slice() and the other functions you've written to return the first half of the string


// function returnFirstHalf (){
//     let greeting = "Good morning";
//         newGreeting = greeting.slice(5);
//         console.log(newGreeting);
// }
// return returnFirstHalf();
// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
//(If the string length is odd, capitalize the shorter of the first half.)

function capitalizeAndLowercase (string){//param
        if(string.length % 2 == 0 ){
            console.log(string.toUpperCase().slice(0, string.length / 2) + string.toLowerCase().slice(string.length / 2));
        } else {
            console.log(string.toLowerCase().slice(0, string.length / 2) + string.toUpperCase().slice(string.length / 2));
        }
    //   let newString = string.concat();//connecting the string
    //         console.log(newString);
}
capitalizeAndLowercase("carmen"); //only argument here, no need to declare
capitalizeAndLowercase("playa del carmen");

//Make a function that takes any string and capitalizes any character that follows a space.