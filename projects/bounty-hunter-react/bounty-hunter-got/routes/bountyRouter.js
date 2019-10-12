const express = require('express');
const bountyRouter = express.Router(); //Router does what app would do
const Bounty = require('../models/bounty.js')

bounties = [
    {
    "firstName": "Murphy\'s",
    "lastName": "Law",
    "Living": true,
    "BountyPrice": 527,
    "Type": "Sith",
    "id": "",
    },
    {
    "firstName": "Loryn",
    "lastName": "Mathieus",
    "Living": true,
    "BountyPrice": 1950,
    "Type": "Jedi",
    "id": ""
    },
    {
        "firstName": "Toryn",
        "lastName": "Mathieus",
        "Living": false,
        "BountyPrice": 1200,
        "Type": "Jedi",
        "_id": ""
    }
]

bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})
// for(let i = 0; i < bounties.length; i++){
//     newBountyID = uuidv4()
//     bounties[i]._id = newBountyID
// }

bountyRouter.get("/", (req, res) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(bounties)
    })
})


bountyRouter.get("/:_id", (req,res)=> {
    //req.params has access to the _id key & value
    //findById is mongoose Method takes 2 args
    //Arg1: Id | Arg2: call back function handles the err & todo
    Bounty.findById()
})
    // .post((req, res) => {
    //     const newBounty = req.body
    //     // newBounty._id = uuidv4()
    //     bounties.push(newBounty)
    //     res.send(newBounty)
    // })

bountyRouter.route("/:_id")
    .get((req, res) => {
        const singleBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(singleBounty)
    })
    .delete((req, res) => {
        const getBountyById = bounties.find(bounty => bounty._id === req.params._id)
        const deletedInDB = bounties.filter(bounty => bounty._id !== req.params._id)
        bounties = deletedInDB
        res.send(`Successfully hunted ${getBountyById.firstName}!`)
    })
    .put((req,res) => {
        // receive item through request
        const bountyId = req.params._id
        //find object to update
        const bountyToUpdate = bounties.find(bounty => bounty._id === bountyId)
        //attach update to body
        const updateObj = req.body
        const updatedBounty = Object.assign(bountyToUpdate, updateObj)
        const bountyIndexToUpdate = bounties.map(bounty => bounty._id === bountyId ? updatedBounty : bounty)
        bounties = bountyIndexToUpdate
        res.send(updatedBounty)
    })


//GET ALL BOUNTIES
// bountyRouter.get("/", (req, res) => {
//     res.send(bounties)
// })

//GET ONE BOUNTY
// bountyRouter.get("/:_id", (req, res) => {
//     const singleBounty = bounties.find(bounty => bounty._id === req.params._id)
//     res.send(singleBounty)
// })

//POST NEW BOUNTY
// bountyRouter.post("/", (req, res) => {
//     //grab user's post object
//     const newBounty = req.body
//     //add an id to the object
//     newBounty._id = uuidv4()
//     //add the new item to collection
//     bounties.push(newBounty)
//     //send it back, once it's been added to DB
//     res.send(newBounty)
// })

//DELETE BOUNTY
// bountyRouter.delete("/:_id",(req, res) => {
// //find the ID
//     const getBountyById = bounties.find(bounty => bounty._id === req.params._id)
//     const deletedInDB = bounties.filter(bounty => bounty._id !== req.params._id)
//     bounties = deletedInDB
//     res.send(`Successfully hunted ${getBountyById.firstName}!`)
// })


//UPDATE EXISTING BOUNTY
// bountyRouter.put("/:_id", (req,res) => {
//     // receive item through request
//     const bountyId = req.params._id
//     //find object to update
//     const bountyToUpdate = bounties.find(bounty => bounty._id === bountyId)
//     //attach update to body
//     const updateObj = req.body
//     const updatedBounty = Object.assign(bountyToUpdate, updateObj)
//     const bountyIndexToUpdate = bounties.map(bounty => bounty._id === bountyId ? updatedBounty : bounty)
//     bounties = bountyIndexToUpdate
//     res.send(updatedBounty)
// })













module.exports = bountyRouter