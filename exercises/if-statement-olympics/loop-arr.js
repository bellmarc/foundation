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
for(let i = 0; i < viewers.length; i++)
  if(viewers.age >= 18){ // Or !=< 18,log,  "not old enough"
      console.log (viewers[i].name + " is old enough to see Mad Max.")
  } else {
      console.log (viewers[i].name + " is not old enough to see Mad Max.")
  }
    console.log();
// Adding values to your arrays in your data:  .push

