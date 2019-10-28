const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    description: String,
    imageURL: String,
    price: {
        type: Number,
        require: true
    },
    hasVideographers: {
        type: Boolean,
        default: false,
    }
})



module.exports = mongoose.model("Locations", locationSchema)