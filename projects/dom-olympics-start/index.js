//Vanilla JS to insert a header to top of page

const header = document.getElementById

// header.innerHTML = `<div class='header'>
// <h2>js made</h2>
// <div>
// <h3>
// <span class='name'> Diana </span>
// <span>wrote the JS</span>
// </div>`
// Template literal = Can wrap this with ticks instead
const container = document.createElement("div")
container.className = "header"

const h2 = document.createElement("h2")
h2.textContent = "JS made this"
const subHeader = document.createElement("div")
// Put stuff inside of div not using innerHTML
const name = document.createElement("span")
name.textContent = "Diana"
name.className = "name"
const rest = document.createElement("span")
// Rest of the text
rest.textContent = "wrote the JS"
//Parent event child
subHeader.appendChild(name)
subHeader.appendChild(rest) //can append as many as you want, we need to select an element to append to
container.appendChild(h2)
container.appendChild(subHeader) //
header.appendChild(container)// header is parent, take what's in parent variable & give that to the child var to display to the page



//===========
const header = document.getElementById


const h2 = document.createElement('h2)')// we want to give it a nested element
h2.textContent = "JS made this"
h2.className = "name"
header.appendChild(h2)


const p = document.createElement("p")
p.innerHTML = "Marc wrote JS"
p.className = "header"
header.appendChild(p)

//const name = document.createElement("span")
//name.innerHTML = "Marcklklk"
//name.className = "name"

const secondChild = document.createElement("span")
secondChild.textContent = "wrote layout"
p.className = "header"

//name and 2nd child appended to p

p.appendChild("secondChild")
p.appendChild("span")


const messages = document.getElementsByClassName("message") //one msg div but 4 msgs

console.log(messages) //returns an array
message[0].textContent = "hey"
message[2].textContent = "Hallo"
message[3].textContent = "Hello"
message[4].textContent = "Oye"

const container = document.getElementsByClassName("messages") //create a div give it the class msg & L or R//

//.create Element for a div, give div two class names using Class List property, give message left
const newMessage = document.createElement("div")
newMessage.classList = "msg left"
newMessage.textContent = "this is new"

//add event listener to square

//typing is on document

//  document.getElementById("header").innerHTML = "<h1>Javascript Made This!!</h1>"

//  document.createElement(name)

//  let headerInsert = document.addEventListener(function(e){
//     e.preventDefault()
// });
// console.log(headerInsert)

// document.getElementById("").addEventListener("header", function(){
// console.log("Testing...1234")
// })