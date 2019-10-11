const express = require("express");
const app = express();



//Middleware
app.use(express.json());



//Routes, param1: Mount path (only fire this if url request is /bounties) |
//param2: what file to use when the request hits this endpoint
app.use("/bounties", require("./routes/bountyRouter.js"));
//could add more routes relating to data. Ex:
// app.use("/users", require('./routes/userRouter.js'))





app.listen(7000, () => {
  console.log(`Server is running on 7000. Bounty Hunter.`);
});
