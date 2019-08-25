// Write an if statement that prints "is greater than" if 5 is greater than 3
let i = 5;
if (i > 3 === true){
    console.log(i + ' is greater than')
} else {
    console.log('false')
}
    console.log();

// Write an if statement that prints "is the length" if the length of "cat" is 3
let cat = 'cat'
if (cat.length === 3){
    console.log(cat.length + ' is the length.')
} else {
    console.log ('is not the length.')
}
    console.log();
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
let dog;

if (cat != dog){
    console.log('not the same')
} else {
    console.log ('is the same')
}
    console.log();

// Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

let person = {
    name: 'Bobby',
    age: 12
}
// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if (person.age >= 18 && person.name[0] === 'B'){// same as person.name.slice(0, 1), starting at index 0 && at "B" but not including 1st index "o"
    console.log(person.name  + ' is allowed to go to the movie')
} else {
    console.log(person.name + ' is not allowed to go to the movie.')
}
    console.log();

// if (person.age >= 18 ){
//     console.log(person.name  + ' is allowed to go to the movie')
// } else {
//     console.log(' is not allowed to go to the movie.')
// }


// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if (1 === '1'){
    console.log('strict')
} else if(1 == '1'){
    console.log('abstract' || 'loose')
} else {
    console.log('not equal at all.')
}
    console.log();

// Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

if (1 <= 2 && 2 === 4){
    console.log('no')
} else {
    console.log('yes')
}
    console.log();

// Write an if statement that checks to see if "dog" is a string

if (typeof 'dog'){// check dataTypes
    console.log(typeof 'dog')
}
    console.log();

// Write an if statement that checks to see if "true" is a boolean
if (typeof true){
    console.log(typeof true)
}
    console.log();

// Write an if statement that checks to see if a variable has been defined or not
let plant
if (plant == undefined ){
    console.log('This ' + plant + ' needs to be defined')
}
    console.log();

// Write an if statement asking if "s" greater than 12?
if ('s' > 12){
    console.log('They are two different dataTypes.')
} else {
    console.log('Not comparable');
}
    console.log();

//Write a ternary statement that console.logs whether a number is odd or even.
let myNum = 24;

let isOddOrEven = (myNum % 2 == 0) ? 'isEven' : 'isOdd';
    console.log(isOddOrEven);

//Palindrome
function isPalindrome(str){  // [\W_]/g matches any non-word char/anything not in [] + global search
    let re = /[\W_]/g;//lowercase the string & use RegExp (or /[^A-Za-z0-9]/g) to remove unwanted characters
    let lowRegStr = str.toLowerCase().replace(re, ''); //lowercase & removing spaces, period, commas
    let reverseStr = lowRegStr.split('').reverse().join('');//chaining methods w/built in functions
    return reverseStr === lowRegStr; //checking if reverseStr strictly equals lowRegStr & returns boolean
  }
  console.log(isPalindrome('Venus Flytrap')); //false
  console.log(isPalindrome('tacocat')); //true
  console.log(isPalindrome('A man, a plan, a canal. Panama')); //true