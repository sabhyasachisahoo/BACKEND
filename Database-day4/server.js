const express = require("express")
const connectToDB = require('./src/db/db')


//server database se connect server.js me

connectToDB();

const app = express(); // server created
app.use(express.json()); // middleware to parse JSON bodies

app.get('/',(req,res) =>{
    res.send("hello world")
})

app.post('/notes',(req,res)=>{
    const {title,content} = req.body
    console.log(title,content);
    
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});