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
  useCreateIndex: false,
  useUnifiedTopology: true
}, ()=> console.log(`Connected to DB!`)
)

//Routes
app.use("/bounties", require("./routes/bountyRouter.js"));





app.listen(7000, () => {
  console.log(`Server is running on 7000. Bounty Hunter.`);
});
