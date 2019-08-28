

const h1 = document.createElement("h1") //creates an element w/ tag name of what's passed into it

h1.textContent = "JavaScript made this!!"; //gives  h1 tag some text, not visible yet until you append it to DOM

document.getElementById("header").appendChild(h1); //selects  something that exits in the DOM & appends h1 as last child.


h1.className = "header";

//creating an element span to wrap text in
const name = document.createElement("span")
//Must assign a text & ClassName to our variable name

name.textContent = "Marc";
name.className = "name";
document.getElementById("header").appendChild(name);

const otherText = document.createElement("span")
otherText.textContent = " wrote the JS";
otherText.className = "otherText"
document.getElementById("header").appendChild(otherText);


labelTheme = document.getElementById("theme-drop-down")


//created toggle as a counter to when msg is L or R side of screen
let toggle = true


//Submit btn
document.message.addEventListener("submit", (e)=> { //add evt listener
    e.preventDefault();
//create div to style MsgInput based on HTML
//     <div class="message right">
//     I'm just a simple farmer
// </div>
    let newMsgDiv = document.createElement("div") //building div first then appending to existing msg div
    if (toggle){ // (toggle by itself = asking if var exists &  if is T/F
        newMsgDiv.className = "message left"
        toggle = false
    } else {
        newMsgDiv.className = "message right"
        toggle = true
    }

    let msgValue = document.message.input.value //get value
    newMsgDiv.append(msgValue)
    console.log(document.getElementsByClassName("messages")[0])
    let msgDiv = document.getElementsByClassName("messages")[0]  //targeting Msg div
    msgDiv.append(newMsgDiv) //append that value to the div
    //output messages to messages Class & append values here

})

// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

let clearMsgBtn = document.getElementById("clear-button") //declaring it globally

clearMsgBtn.addEventListener("click", (e)=> {  //target id of clear btn
    let removeMsgDiv = document.getElementsByClassName("messages")[0] //need to target the messages array
// console.log(removeMsgDiv)
    document.getElementsByClassName("messages")[0].textContent = " ";

})


