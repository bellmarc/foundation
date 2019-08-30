
let subBtn = document.getElementById("subBtn")

document.addEventListener("submit", (e)=>{ //listening to a global event
    e.preventDefault();
    let name = document.travelForm.firstName.value + " " + document.travelForm.lastName.value
    let userTravelInfo = (name)
    let age = document.travelForm.age.value
    let gender = document.travelForm.gender.value
    let location = document.travelForm.location.value
//    let foodPreference = document.travelForm.foodType.value
//    console.log(foodPreference)

    let diet = document.querySelectorAll("input[name=foodType]:checked");
    console.log(diet.checked);

    let foodPreference = []; //empty array to push values to
    for (let i = 0; i < diet.length; i++){
        foodPreference.push(diet[i].value)
    };

        console.log(foodPreference)
    alert(userTravelInfo + "\n " + age + "\n " + gender + "\n " + location + "\n " + foodPreference);

})

// $(name) \n\