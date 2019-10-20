const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
PORT = 9000;


//Middleware for every request
app.use(express.json())
//checks status
app.use(morgan('dev'))


//Mongo Compass DB Connection, when developing locally, 2nd arg configuration
mongoose.connect("mongodb://localhost:27017/tododb",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, ()=> console.log(`Connected to the DB!`))

//Routes, param1: Mount path (only fire this if url request is /bounties) |
//param2: what file to use when the request hits this endpoint
app.use("/todos", require('./routes/todoRouter.js'))
//could add more routes relating to data. Ex:
// app.use("/users", require('./routes/userRouter.js'))


app.listen(9000, () => {
    console.log(`Server is running on ${PORT}`)
})

