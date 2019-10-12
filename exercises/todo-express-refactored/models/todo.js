const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true,
        default: "Todo Item 1"
    },
    description: String,
    imageURL: String,
    completed: Boolean,
})

//Model needs: 1. Model Name   2. Model blueprint
module.exports = mongoose.model("Todo", todoSchema)