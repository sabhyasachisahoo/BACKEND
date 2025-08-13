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

// DELETE

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message: "Note deleted successfully",
    })
})

// PATCH  updating title

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const {title} = req.body;

    notes[index].title = title
    res.json({
        message: "Note updated successfully",
    })
})


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/notes',(req,res)=>{
    res.json(notes);
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})