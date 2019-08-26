// // Write a for loop that prints to the console the numbers 0 through 9.
for (let i = 0; i <= 9; i++){
    console.log(i);
}
// // Write a for loop that prints to the console 9 through 0.
for (let i = 9; i <= 0; i--){
    console.log(i);
}

// // Write a for loop that prints these fruits to the console.
var fruits = ["banana", "orange", "apple", "kiwi"];

 for (let i = 0; i< fruits.length; i++){

     console.log(fruits);
 }

//  //Write a for loop that will push the numbers 0 through 9 to an array.

for (let i = 0; i < fruits.length; i++){
    var fruits = ["banana", "orange", "apple", "kiwi"];
    let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    fruits.push(numArray);

    console.log(fruits);
}
// // Write a for loop that prints to the console only even numbers 0 through 100.

for (let i = 0; i <= 100; i ++){
    if (i % 2 === 0){
    console.log(i);
    }
}
//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
newFruits = [];
    for(let i = 0; i < fruit.length; i += 2){

        newFruits.push(fruit[i]);
}
console.log(newFruits);
