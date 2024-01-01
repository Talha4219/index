const express = require("express");

const app = express();
const port = 9000

app.use("/",(req,res) => {
    res.json({message:"hello from server"})
})
app.listen(9000, ()=>{
    console.log("connected to server")
})