//LOOPS & ARRAYS PRACTICE
//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = [
        "stapler",
        "monitor",
        "computer",
        "desk",
        "lamp",
        "computer",
        "lamp",
        "stapler",
        "computer",
        "computer"
    ]
let count =0;
for(let i = 0; i < officeItems.length; i++){
    if (officeItems[i] === officeItems[2,5,8,9]){
        count++
    }
}
console.log(count);
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
//changed name of object
    let viewers = peopleWhoWantToSeeMadMaxFuryRoad;
    //log a personalized message for all potential viewers:
    //Check to see if the movie goer is a male or female for an even more personalized message.
    for (let i = 0; i < viewers.length; i++) {
      viewerGender = viewers[i].gender;
      if(viewerGender === "male"){
        pronounObject = "him";
        pronounNoun = "He";
      } else {
        pronounObject = "her";
        pronounNoun = "She";
      }

      if(viewers.age >= 18 ){ // Or !=< 18,log,  "not old enough"
       //replace value
          console.log (pronounNoun + " is old enough. " + pronounNoun + "'s good to see Mad Max Fury Road.") //previously viewers[i].name
      } else {
          console.log (pronounNoun + " is not old enough to see Mad Max Fury Road, don't let " + pronounObject + " in.")
      }
        console.log();

    }


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.map(word => 'greatness');

  console.log(result);

// Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times. The light is off to start with. Log to the console whether or not the light is on at the end.
// Adding values to your arrays in your data:  .push

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"



