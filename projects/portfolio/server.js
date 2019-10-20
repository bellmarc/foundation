const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7000

app.use(express.json());
app.use(morgan('dev'));

//DB CXN
mongoose.connect(`mongodb://localhost:27017/portfoliodb`, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, () => console.log(`Connected to DB`))

//Routes


//Error Handling

app.use((err, req, res, next) => {
    console.log(err)
    return res.send( {
        errorMessage: err.message
    })
})

//port #, if successful, anon fcn runs
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
