const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect("mongodb://localhost:27017/locationdb", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, ()=> console.log(`Connected to DB`))

app.use("/locations", require('./routes/locationRouter.js'))

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})