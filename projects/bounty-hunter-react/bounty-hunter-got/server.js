const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');


//Middleware
app.use(express.json());
app.use(morgan('dev'))

//DB Connection
mongoose.connect("mongodb://localhost:27017/bountydb",
{
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: false
}, ()=> console.log(`Connected to DB!`)
)

//Routes, param1: Mount path (only fire this if url request is /bounties) |
//param2: what file to use when the request hits this endpoint
app.use("/bounties", require("./routes/bountyRouter.js"));
//could add more routes relating to data. Ex:
// app.use("/users", require('./routes/userRouter.js'))





app.listen(7000, () => {
  console.log(`Server is running on 7000. Bounty Hunter.`);
});
