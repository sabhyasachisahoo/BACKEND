const mongoose = require('mongoose')


//server database se kese connect hoga ye tum db.js me likhoge

function connectToDB(){

    mongoose.connect("YourMongodbConnectionString")
    .then(()=>{
        console.log("Connected to Database");
        
    })
}


module.exports = connectToDB;
