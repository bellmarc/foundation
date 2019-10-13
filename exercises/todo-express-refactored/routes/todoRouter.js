const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo.js");


// todoRouter.get("/", (req, res) => {
//   res.send(todos);
// });

//GET ALL
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



module.exports = todoRouter