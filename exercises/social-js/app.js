//Create a model to represent the database of a new social media platform you're creating. Include the following:
// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

let serviceDogCandidates ={
    dog1: {
        name: 'Devan',
        age: 5,
        specialty: 'mobility assistance',
        features: [
            'open doors', 'retrieval', 'walking support', 'navigation'
        ]
    },
    dog2: {
        name: 'Romo',
        age: 7,
        specialty: 'autism support',
        features: [
            {
                fur: 'long-hair',
                size: 'large',
                abilities: ['socialization','behavioral control', 'tethering']
            }
        ]
    },

    dogType: function() { //A Method of serviceDogCandidates Object
        if (serviceDogCandidates.dog1.specialty){
            console.log(serviceDogCandidates.dog1.name + " would be a great choice for mobility assistance.");
        }
    },
    dogHandler1: {
        name: 'Todd Zeiss',
        age: 36,
        specialty: 'mobility care training',
        medicalNeed: ['loss of balance', 'limited mobility','prosthetic wearer'],
    },
    dogHandler2: {
        name: 'Max Liu',
        age: 25,
        specialty: 'autism support training',
        medicalNeed: ['socializing', 'meltdown prevention', 'location control']
    },

}
//Adding two more Objects with properties
serviceDogCandidates.dog3 = {
    dog3: 'Russell',
    age: 4,
    specialty: 'emotional support',
    features: [
        {
            fur: 'medium-hair',
            size:'medium',
            abilities: ['emotional state regulator','pressure application','anxiety or panic response']

        }
    ]

};

serviceDogCandidates.dogHandler3 = {
    name:'Clarissa Rodriguez',
    age: 24,
    specialty: 'emotional wellness training',
    medicalNeed: ['anxiety reduction', 'emotional state detection']
};

//Pushing Two Items to Arrays
serviceDogCandidates.dog3.features[0].abilities.push("guard", "crowd aversion");
    console.log(serviceDogCandidates.dog3.features[0].abilities);

    console.log(serviceDogCandidates.dog3, serviceDogCandidates.dogHandler3); //Two new objects added

    console.log( serviceDogCandidates.dogType()); //Executing Method


// function: findDogHandler() {
//     if (serviceDogCandidate.specialtyA ){ //&& serviceDogCandidate.dogHandler1.specialty
//         console.log(serviceDogCandidate.dogName1 + 'was chosen.');
//     }
    // else {
    //     console.log("Search for another type of service dog specialty.")
    // }
// },


//Execute/ Call fcn:
//  function sumNum(sum1,sum2){
//      return sum1 + sum2
//  }

//  let result = sumNum(4,8) //result should be 12
//  console.log(result)



//  function firstLast(first,last){
//      return first + last
//  }

//  let fullName = firstLast("Sally ", "LeFevre")
//  console.log(fullName)