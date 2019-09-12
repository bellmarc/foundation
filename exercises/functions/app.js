//Write a function that accepts two numbers as parameters, and returns the sum.

// function numSum (num1, num2){
//     addNum = (num1 + num2)
//     console.log(addNum)
//     return addNum
// };
// console.log(numSum(2, 6));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function numSumTriad (num1, num2, num3){
//     largestNum = Math.max(num1,num2,num3)
//     return largestNum
// };
// console.log(numSumTriad(24, 6, 12));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// function isEvenOrOdd (num){
//     let result;
// if (num % 2 === 0){
//     result = "Even";
// } else {
//     result = "Odd";
// }
// return result
// }
// console.log(isEvenOrOdd(52));

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// function strConcat (string) {
//     let result;
//     if(string.length <= 20){

//         result = string + string;
//     } else {
//         result = string / 2;
//     }
//     return result;
// }
// console.log(strConcat("PanamaCarmenPanamaCarmen"));


//Write a function that accepts two numbers as parameters, and returns the sum.

// console.log("Test")
// function sumTwoNums(num1, num2) {
//     console.log(num1 + num2)
// }
// return sumTwoNums(2, 4)


//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function threeNumSum(num1, num2, num3) { //passing 3 params
//     return  Math.max(num1, num2, num3)//check which is larger
// }
//     console.log(threeNumSum(28, 4, 23))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// function isEvenOrOdd(num) {
//     if(num % 2 === 0) {
//         console.log("Even")
//     } else {
//         console.log("Odd")
//     }
// }
//      isEvenOrOdd(21)
//      isEvenOrOdd(24)

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string).


function attachString(str){ //accepts str as param
    if (str.length <= 20){ // Length >== 20 chars => str concat'd
    console.log(str.length)
        return str.concat(str)
    } else { //Str > 20 chars => 1st half of Str.
        console.log(str.length)
        const strHalf = str.length / 2
        return str.substring(0, strHalf)
    }

} console.log(attachString("morethantwentycharsnow"))

