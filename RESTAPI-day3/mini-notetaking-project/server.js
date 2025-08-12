const express = require('express');

const app = express(); //server created

app.use(express.json()); //middleware to parse JSON bodies
// /notes => title & description

let notes = []

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Note created successfully",
        note: notes
    });
    
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})