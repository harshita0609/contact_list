const mongoose = require('mongoose'); //module used
//mongoose is layer btw mongodb and express
mongoose.connect('mongodb://localhost/contact');  // connect to mongodb  //contact is our name of db
const db = mongoose.connection;//access to db

db.on('error',console.error.bind(console,'connection error:'));  //error handling

db.once('open', function(){
    console.log("successfully connected to db");    //  when dp opens do this function
});
