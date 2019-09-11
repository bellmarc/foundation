//GET: axios.get()
//POST: axios.post()
//PUT: axios.put()
//DElETE: axios.delete()


// https://api.vschool.io/marbel/todo


let todoList = []

//GET Request
function getTodos(){
    axios.get("https://api.vschool.io/marbel/todo")
    .then(response => {
        let todo = response.data
        listTodos(todo)
    })
    .catch(error => {
        console.log(error)
    })
}          getTodos()


 // POST Adding a fcn that appends the values to axios API
function postnewTodo(addNew) {
    axios.post("https://api.vschool.io/marbel/todo", addNew )
    .then((response)=> {
        todoList.push(response.data)
        listTodos([response.data])
    })
    .catch(error => {
        console.log(error)
    })
}

//POST, grab values from newTodo, display them & post them

form.addEventListener("submit", function (e){
    e.preventDefault()
    //grab values
    const newTitle = form.title.value
    const newDescription = form.description.value
    const newImage = form.imgUrl.value

    const newTodoObject = {
        title: newTitle,
        description: newDescription,
        imgUrl: newImage
    }
        postnewTodo(newTodoObject)
 })




//Listing All Items from GET

function listTodos(todo) {

    // if(updated === "updated"){ //saves checked boxes

    // }
        todo.forEach(todo => {
        //create Element
        const h2 = document.createElement("h2")
        const todoListContainer = document.createElement("div")
        const detail = document.createElement("p")
        const image = document.createElement("img")
        const checkBox = document.createElement("input")
        //create element to addSingle Todo
        // const addTodo = document.createElement("button")

        //Edit Element
        h2.textContent = todo.title
        detail.textContent = todo.description
        image.src = todo.imgUrl
        //image.setAttribute("src", todos[i].imgUrl)
        //class for h2 for txt DECO, in code toggle w/ if statement
        // addTodo.setAttribute("class", "addTodoItem")

        //PUT to save check-marked item:
        checkBox.addEventListener("click", function(){
            if (checkBox.checked){ // if checked T/F then strike
                axios.put("https://api.vschool.io/marbel/todo/" + todo._id )
                .then((response)=> {
                    todoList.push(response.data)
                    listTodos([response.data])
                })
                .catch(error => {
                    console.log(error)
                })

                h2.style.textDecoration = "line-through"
                h2.style.color = "#ff0000"
                } else {
                h2.style.textDecoration ="none"
                h2.style.color = "#2f4f4f"
            }
        })

        checkBox.type = "checkbox"
        todoListContainer.className = "todoListContainer" //for later CSS styling

        //Append Element, order of appendChild matters!
        todoListContainer.appendChild(h2)
        todoListContainer.appendChild(detail)
        todoListContainer.appendChild(image)
        h2.appendChild(checkBox)
        document.getElementById("todoList").appendChild(todoListContainer)
    })

}


