// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.
// Use the length property to find the length of the vegetable array.
let fruit = ['banana', 'apple', 'orange', 'watermelon'];
let vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];
// Add that number to the end of the vegetable array.

function food(){

    vegetables.pop();
    console.log(vegetables);
    let vegLength = vegetables.length
    console.log(vegLength)
    vegetables.push(vegetables.length);
    console.log(vegetables)
// Remove the first item from the fruit array.
    fruit.shift();
    console.log(fruit);
// Find the index of "orange."
    let orangeIndex = fruit.indexOf('orange')
    console.log(orangeIndex);
// Add that number to the end of the fruit array.
    fruit.push(orangeIndex);
    console.log('fruit ', fruit);
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);
    console.log('food ', food);
// Remove 2 elements from your new array starting at index 4 with one method.
   food.splice(4, 2)
    console.log('food ', food);
// Reverse your array.
    console.log (food.reverse());
// Turn the array into a string and return it.
    console.log(food.join(" - "))
}
        food();
//Array methods extra:

let serviceDog = ['Romo', 'Russ', 'Penelope'];
let dogHandler = ['Todd', 'Clarissa', 'Max'];

serviceDog.push('Skylar');
(console.log(serviceDog));

dogHandler.reverse();
console.log(dogHandler);

let serviceTeam = serviceDog.concat(dogHandler);
console.log(serviceTeam);

dogHandler.splice(2,1, 'Aria', 'Dave')
console.log(dogHandler);

serviceDogRetired = serviceDog.shift();
console.log(serviceDog);//new Array shown
console.log(serviceDogRetired); //details who retired

newServiceDog = serviceDog.unshift("Justin");
serviceDog[0].toString();
console.log(newServiceDog + " is the new service Dog." ); //4 is the new Service Dog..
console.log(serviceDog);



