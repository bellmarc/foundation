const express = require("express");
const userRouter = express.Router();
const User = require("../models/booking.js");

userRouter.get("/", (req, res, next) => {
  User.find({ userType: "professional" }, (err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(users);
  });
});

module.exports = userRouter;
