const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        default: "Qui-Gon"
    },
    lastName: {
        type: String,
        required: true,
        default: "Jinn"
    },
    isAlive: Boolean,
    bountyPrice: Number,
    type: String,
    imgURL: String

})


module.exports = mongoose.model("Bounty", bountySchema)