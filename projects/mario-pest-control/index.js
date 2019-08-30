let btn = document.getElementById("total")

btn.addEventListener("click", (e)=>{
    //multiplication section here
   let goombaSum = Number(document.getElementById("goomba").value ) * 5 //make 3 var & grab inputs

   let bombSum = Number(document.getElementById(["bob-ombs"]).value) * 7

   let cheepSum = Number(document.getElementById("cheeps").value) * 11

    console.log (goombaSum, bombSum, cheepSum)

let coinSum = goombaSum + bombSum + cheepSum

 //Coin Summary
    let coinLocation = document.getElementById("result")
    coinLocation.textContent = coinSum
//append or textContent

})

