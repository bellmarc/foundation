const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){ //onclick should be "click"
    const subItem = createSubItem(e)
    document.getElementById("itemList").appendChild(subItem)
})

function createDropDown(){ //populates sub Drop downs, drop down is input box .value
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") //create Element only exists in document
        option.innerHTML = colors[i]
        option.value = colors[i]
        option.style.backgroundColor = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){ // <== keyword "change" not "onchange"
        e.target.parentNode.style.backgroundColor = e.target.value //need .style to access CSS
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value //input box values (taking RBG values)
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


