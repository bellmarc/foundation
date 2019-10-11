const express = require('express');
const todoRouter = express.Router();


todoRouter.get('/', (req, res) => {
    res.send(todos)
})







module.exports = todoRouter