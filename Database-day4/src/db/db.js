const mongoose = require('mongoose')


//server database se kese connect hoga ye tum db.js me likhoge

function connectToDB(){

    mongoose.connect("mongodb+srv://query6146:kSXT2QJIbBYiijtR@cluster0.8d5uruk.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to Database");
        
    })
}


module.exports = connectToDB;