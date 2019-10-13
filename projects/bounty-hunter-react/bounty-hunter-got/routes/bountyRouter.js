const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bounty.js')


bountyRouter.get("/", (req, res) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.get("/:_id", (req, res)=> {
    Bounty.findById(req.params._id, (err, bounty) => {
        if (err) {
            res.send(500)
            return res.send(err)
        } else if (!bounty) {
            res.status(404)
            return next(new Error("Bounty Not Found"))
        }
        return res.send(bounty)
    })
})

bountyRouter.post("/", (req, res) => {
   const newBounty = new Bounty(req.body)
   newBounty.save((err, newBounty) => {
        if (err) {
            res.status(500);
            return res.send(err)
        }
    })
    return res.send(newBounty)
});

bountyRouter.delete("/:_id", (req, res) => {
    Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
        if(err) {
            res.status(500);
            return res.send(`Deletion error`)
        }
        return res.status(200).send(`Successfully Deleted ${bounty.firstName} ${ bounty.lastName }`)
    });
});


bountyRouter.put("/:_id", (req, res)=> {
    Bounty.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, bounty) => {
        if (err) {
            res.status(500);
        }
        return res.send(bounty)
    });
});


module.exports = bountyRouter