//GET: axios.get()
//POST: axios.post()
//PUT: axios.put()
//DElETE: axios.delete()


// https://api.vschool.io/marbel/todo


//second argument of eventListener
function getTodos(){
    axios.get("https://api.vschool.io/marbel/todo")
    .then(response => {
        const todos = response.data
        listTodos(todos)
    })
    .catch(error => {
        console.log(error)
    })
}          getTodos()


//
function listTodos(todos) {
    for(let i = 0; i< todos.length; i++) {
        //create Element
        const h2 = document.createElement("h2")
        const todoListContainer = document.createElement("div")
        const detail = document.createElement("p")
        const image = document.createElement("img")
        const checkBox = document.createElement("input")
        
        //Edit Element
        h2.textContent = todos[i].title
        detail.textContent = todos[i].description
        image.src = todos[i].imgUrl
        //image.setAttribute("src", todos[i].imgUrl)

        checkBox.type = "checkbox"
        todoListContainer.className = "todoListContainer" //for later CSS styling
        //Append Element, order of appendChild matters!
        todoListContainer.appendChild(h2)
        todoListContainer.appendChild(detail)
        todoListContainer.appendChild(image)

        h2.appendChild(checkBox)
        document.getElementById("todoList").appendChild(todoListContainer)


    }
}


