const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema ({
    title: {
        type: String,
        require: true,
        default: "Organic Lavender Tea"
    },
    description: String,
    imageURL: String,
    price: {
        type: Number,
        require: true
    },
    addToCart: {
        type: Boolean,
        default: false,
    }
})



module.exports = mongoose.model("Product", productSchema)