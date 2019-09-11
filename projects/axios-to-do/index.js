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
        const todo = response.data //for loop would be todos (multiple)
        listTodos(todo) //calling this function separating concerns
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

    const newTodoObject = { //can de-structure this
        title: newTitle,
        description: newDescription,
        imgUrl: newImage
    }
        postnewTodo(newTodoObject)
 })

//PUT
const checkBoxToComplete = {
    completed: true
}

const checkBoxNotCompleted = {
    completed: false
}

//Listing All Items from GET

function listTodos(todo) { //receives data

        todo.forEach(todo => {
        //create Element

        const todoListContainer = document.createElement("div")
        const h2 = document.createElement("h2")
        const detail = document.createElement("p")
        const image = document.createElement("img")
        const checkBox = document.createElement("input")
        let delBtn = document.createElement("button")

        //Edit Element

        todoListContainer.classList.add("todo-container")
        //for CSS styling
         //todoListContainer.className = "todoListContainer"
        h2.textContent = todo.title
        detail.textContent = todo.description
        image.src = todo.imgUrl
        image.classList.add("img-styles")
        delBtn.textContent = "delete"
        delBtn.setAttribute("id", "delBtn")
        checkBox.type = "checkbox"
        checkBox.classList.add("checkbox")

        // SAVE Checkbox mark on refresh
        if (todo.completed) {
            h2.style.textDecoration = "line-through" //Separation of Concerns
            h2.style.color = "#ff0000"
            checkBox.checked = true
        }

        //PUT to save check-marked item:
        checkBox.addEventListener("click", function(){
            if (checkBox.checked){ // if checked T/F then strike
                axios.put(`https://api.vschool.io/marbel/todo/${todo._id}`, checkBoxToComplete ) //Object after id
                .then((response)=> {
                    console.log("yes to no")
                    listTodos([response.data])
                    h2.style.textDecoration = "line-through"
                    h2.style.color = "#ff0000"
                })
                .catch(error => {
                    console.log(error)
                })
                } else {
                axios.put(`https://api.vschool.io/marbel/todo/${todo._id}`, checkBoxNotCompleted )
                .then((response)=> {
                    console.log("no to yes")
                    listTodos([response.data])
                    h2.style.textDecoration ="none"
                    h2.style.color = "#2f4f4f"
                })
                .catch(error => {
                    console.log(error)
                })
            }
        })
//DELETE

        delBtn.addEventListener("click", function(){
            axios.delete(`https://api.vschool.io/marbel/todo/${todo._id}`)
            .then((response)=> {
                console.log("Delete clicked.")
                listTodos([response.data])
            })
            .catch(error => {
                console.log(error)
            })
        })

        //Append Element, order of appendChild matters!
        todoListContainer.appendChild(h2)
        todoListContainer.appendChild(detail)
        todoListContainer.appendChild(image)
        h2.appendChild(checkBox)
        h2.appendChild(delBtn)
        document.getElementById("todoList").appendChild(todoListContainer)
    })
}


