//The square's color will change as follows:


// Blue when the mouse hovers over the square
const box = document.getElementById("box")
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue" //triggers blue bg on hover

})

box.addEventListener("mouseout", function() { //triggers black after mouse leaves
    box.style.backgroundColor = "black"
})
// Red when the mouse button is held down over the square

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red" //triggers red bg wn user releases mouse button over element5
})
//Yellow when the mouse button is let go over the square
box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "yellow" //triggers blue bg on hover

})
//Orange when the mouse scroll is used somewhere in the window (not just over the square).
const doc = document.getElementById("body")
document.addEventListener("wheel", function() { //<== anonymous fcn
    box.style.backgroundColor = "orange" //triggers blue bg on hover

})


document.addEventListener("keypress", keyColorChange) //fcn reference for what it's listening for & fcn
function keyColorChange (e){// fcn declaration
    switch (e.key){
       case "b":
       box.style.backgroundColor = "blue";
       break;
       case "r":
       box.style.backgroundColor = "red";
       break;
       case "g":
       box.style.backgroundColor = "green";
       break;
       case "y":
       box.style.backgroundColor = "yellow";
       break;
       case "o":
       box.style.backgroundColor = "orange";
       break;
       default:
       box.style.backgroundColor = "black";
    }

}

