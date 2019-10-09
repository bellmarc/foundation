const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');


bounties = [
    {
    "firstName": "Santana",
    "lastName": "Voogd",
    "Living": true,
    "BountyPrice": 350,
    "Type": "Jedi",
    "id": "",
    },
    {
    "firstName": "Murphy\'s",
    "lastName": "Law",
    "Living": true,
    "BountyPrice": 527,
    "Type": "Sith",
    "id": "",
    },
    {
    "firstName": "Mathieus",
    "lastName": "Gordyn",
    "Living": true,
    "BountyPrice": 864,
    "Type": "Jedi",
    "id": ""
    }
]

for(let i =0; i < bounties.length; i++){
    newBountyID = uuidv4()
    bounties[i]._id = newBountyID
}

app.use(express.json());

//GET ALL BOUNTIES
app.get("/bounties", (req, res) => {
    res.send(bounties)
})

//GET ONE BOUNTY
app.get("/bounties/:_id", (req, res) => {
    const singleBounty = bounties.find(bounty => bounty._id === req.params._id)
    res.send(singleBounty)
})

//POST NEW BOUNTY
app.post("/bounties", (req, res) => {
    //grab user's post object
    const newBounty = req.body
    //add an id to the object
    newBounty._id = uuidv4()
    //add the new item to collection
    bounties.push(newBounty)
    //send it back, once it's been added to DB
    res.send(newBounty)
})

//DELETE BOUNTY
app.delete("/bounties/:_id",(req, res) => {
//find the ID
    const getBountyById = bounties.find(bounty => bounty._id === req.params._id)
    const deletedInDB = bounties.filter(bounty => bounty._id !== req.params._id)
    bounties = deletedInDB
    res.send(`Successfully hunted ${getBountyById.firstName}!`)
})


//UPDATE EXISTING BOUNTY
app.put("/bounties/:_id", (req,res) => {
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


app.listen(7000, ()=> {
    console.log(`Server is running on 7000. Bounty Hunter.`)
})