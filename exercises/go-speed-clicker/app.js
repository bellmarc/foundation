//Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer)


//get Elements
const display = document.getElementById("count")
const btn = document.getElementById("count-btn")
//Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.
const countNum = localStorage.getItem("count")
    console.log(countNum)
    
// Edit Elements
let count = countNum
display.textContent = count

//Add Functionality for btn Element

btn.addEventListener("click", () => {
    count++
    display.textContent = count
    localStorage.setItem("count", count)
})

