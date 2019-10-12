const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
PORT = 9000;


//Middleware for every request
app.use(express.json())
//checks status
app.use(morgan('dev'))


//DB Connection, when developing locally, 2nd arg configuration
mongoose.connect("mongodb://localhost:27017/tododb",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
}, ()=> console.log(`Connected to the DB!`))

//Routes
app.use("/todos", require('./routes/todoRouter.js'))



app.listen(9000, () => {
    console.log(`Server is running on ${PORT}`)
})

