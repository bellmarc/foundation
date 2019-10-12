const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo.js");

todoRouter.get("/", (req, res) => {
  res.send(todos);
});

//Fake DB
let todos = [
  {
    title: "Follow-up Call DB",
    description:
      "End the Phone tag w/POC in Delaware. Get details/solid plan on incorporation, i.e optimal location.",
    imageURL: "",
    completed: false,
    _id: ""
  },
  {
    title: "Attend PTAC Symposium",
    description:
      "Connect with GSA founders, lecturers, gather intel, and schedule follow-up meetings",
    imageURL: "",
    completed: false,
    _id: ""
  },
  {
    title: "Japan Osusume",
    description: "Refine Japan Travel Recommendation Document",
    imageURL: "",
    completed: false,
    _id: ""
  }
];

// for(let i = 0; i < todos.length; i++){
//     // console.log(todos[i])
//     newId = uuid()
//     // console.log(typeof newId)
//     todos[i]._id = newId
//     // console.log(todos[i])
// }

//GET ALL,
todoRouter.get("/", (req, res) => {
  Todo.find((err, todos) => {
    //mongoose.find from model, like axios.get
    if (err) {
      //handle error
      res.status(500);
      return res.send(err); //return so it ends fcn as well
    }
    return res.status(200).send(todos);
  });
});

todoRouter.post("/", (req, res) => {
  const newTodo = new Todo(req.body);
  //mongoose save method takes a callback function, which handles the error & the object being saved
  newTodo.save((err, newTodo) => {
    if (err) {
      res.status(500);
      return res.send(err); // or next(err)
    }
  });
  return res.send(newTodo);
});

//GET ONE REQUEST, colon ensures it's a param
todoRouter.get("/:_id", (req, res) => {
  //req.params has access to the _id key & value
  //findById is mongoose Method takes 2 args
  //Arg1: Id | Arg2: call back function handles the err & todo
  Todo.findById(req.params._id, (err, todo) => {
    if (err) {
      res.status(500);
      return res.send(err);
    } else if (!todo) {
      res.status(404);
      return next(new Error("Todo Not Found"));
    }
    return res.send(todo);
  });
});

todoRouter.delete("/:_id", (req, res) => {
  //arg1: id arg2: callback fcn, handles the err & todo
  Todo.findByIdAndRemove(req.params._id, (err, todo) => {
    if (err) {
      res.status(500);
      return res.send(`Deletion error`);
    }
    return res.status(200).send(`Successfully Deleted ${todo.title}`);
  });
});

//PUT REQUEST with DB
todoRouter.put("/:_id", (req, res) => {
  //findById&Update
  //Arg1: Id | Arg2: Updated todo
  //Arg3: Configuration Object {new: true }
  //Arg4: Error Handling Callback fcn
  Todo.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500);
      }
      return res.send(todo);
    }
  );
});

//ADD NEW TODO | POST REQUEST - INSERT ONE
// todoRouter.post("/", (req, res) => {
//     console.log(req.body)
//     //Grab user's post object (req.body)
//     const newTodo = req.body
//     // //Add an _id to the object (just like MongoDB will)
//     newTodo._id = uuidv4()
//     // //Add the new todo item to Todo collection
//     todos.push(newTodo)
//     //Send back todo once it's been added to the DB
//     res.send(newTodo)
// })

// DELETE REQUEST, remove one
// todoRouter.delete("/:_id", (req, res)=> {
//     // console.log(req.params._id)
//     const getDeletedTodo = todos.find(todo => todo._id === req.params._id)
//     const updatedDB = todos.filter(todo => todo._id !== req.params._id)
//     todos = updatedDB
//     res.send(`Successfully deleted ${getDeletedTodo.title}`)
// })

//UPDATE ONE TODO

//res.object what's coming in through the request in JSON
// Use middleware to parse through object

// res.params, comes from url, key is set with a colo || '._id'
// todoRouter.put("/:_id", (req, res)=> {
//     //res.params.id = id of item to update | req.body = Object to update it with
//     //First find item to update (mongoose will do this)
//     const getUpdatedTodoById = todos.find(todo => todo._id === req.params._id)
//     const updateObject = req.body
//     const updatedTodo = Object.assign(getUpdatedTodoById, updateObject)
//     const updateDB = todos.map(todo => todo._id === req.params._id ? updatedTodo : todo)
//     todos = updateDB
//     res.send(updatedTodo)
// })

module.exports = todoRouter;
