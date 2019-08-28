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

function strConcat (string) {
    let result;
    if(string.length <= 20){

        result = string + string;
    } else {
        result = string / 2;
    }
    return result;
}
console.log(strConcat("PanamaCarmenPanamaCarmen"));