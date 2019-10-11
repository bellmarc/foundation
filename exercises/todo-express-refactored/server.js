const express = require('express');
const app = express();
PORT = 9000;


app.use(express.json())

app.use("/todos", require('./routes/todoRouter.js'))


app.listen(9000, () => {
    console.log(`Server is running on ${PORT}`)
})

