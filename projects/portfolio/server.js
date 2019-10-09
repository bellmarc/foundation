const express = require('express')
//app is our server
const app = express()

//Mount path, callback w/request & response objects
app.get("/", (req, res)=> {
    res.send("Anything else")
})

//port #, if successful, anon fcn runs
app.listen(7000, () => {
    console.log(`Server is running on port 7000`)
})
