const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');


//Fake DB
let todos = [
    {
    "title": "Follow-up Call DB",
    description: "End the Phone tag w/POC in Delaware. Get details/solid plan on incorporation, i.e optimal location.",
    "imageURL": "",
    "completed": false,
    "_id": ""
    },
    {
    "title": "Attend PTAC Symposium",
    description: "Connect with GSA founders, lecturers, gather intel, and schedule follow-up meetings",
    "imageURL": "",
    "completed": false,
    "_id": ""
    },
    {
    "title": "Japan Osusume",
    description: "Refine Japan Travel Recommendation Document",
    "imageURL": "",
    "completed": false,
    "_id": ""
    }
]


for(let i = 0; i < todos.length; i++){
    // console.log(todos[i])
    newId = uuidv4()
    // console.log(typeof newId)
    todos[i]._id = newId
    // console.log(todos[i])
}

app.use(express.json());

//GET ALL TODOS
app.get("/todos", (req, res) => {
    res.send(todos)
})

//GET ONE REQUEST, colon ensures it's a param
app.get("/todos/:_id", (req, res) => {
    const singleTodo = todos.find( todo => todo._id === req.params._id)
    res.send(singleTodo)
})

//ADD NEW TODO | POST REQUEST - INSERT ONE
app.post("/todos", (req, res) => {
    console.log(req.body)
    //Grab user's post object (req.body)
    const newTodo = req.body
    // //Add an _id to the object (just like MongoDB will)
    newTodo._id = uuidv4()
    // //Add the new todo item to Todo collection
    todos.push(newTodo)
    //Send back todo once it's been added to the DB
    res.send(newTodo)
})




// DELETE REQUEST, remove one
app.delete("/todos/:_id", (req, res)=> {
    // console.log(req.params._id)
    const getDeletedTodo = todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedDB
    res.send(`Successfully deleted ${getDeletedTodo.title}`)

})

//UPDATE ONE TODO 

//res.object what's coming in through the request in JSON
// Use middleware to parse through object

// res.params, comes from url, key is set with a colo || '._id'
app.put("/todo/:_id", (req, res)=> {
    //res.params.id = id of item to update | req.body = Object to update it with
    //First find item to update (mongoose will do this)
    const getUpdatedTodoById = todos.find(todo => todo._id === req.params._id)
    const updateObject = req.body
    const updatedTodo = Object.assign(getUpdatedTodoById, updateObject)
    const updateDB = todos.map(todo => todo._id === req.params._id ? updatedTodo : todo)
    todos = updateDB
    res.send(updatedTodo)
})



//listen should remain at bottom | Takes two: Port # & callback
app.listen(9000, ()=> {
    console.log(`Server is running on port 9000. Todo Express.`)
} )

