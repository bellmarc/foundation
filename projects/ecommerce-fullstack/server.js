const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
PORT = 9001;



//Middleware
app.use(express.json())
app.use(morgan('dev'))

//DB Connection
mongoose.connect("mongodb://localhost:27017/inventorydb",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
}, ()=> console.log(`Connected to DB`))

//Routes

app.use("/products", require('./routes/inventoryRouter.js'))


app.listen(9001, () => {
    console.log(`Server is running on ${PORT}`)
})