var mongoose = require('mongoose');

// //Create db url
// var dbURL = "mongodb://localhost:27017/usersdb";
// //Connect to database
// var conn = mongoose.createConnection(dbURL);

mongoose.connect('mongodb://localhost:27017/usersdb').then(()=>{
    console.log('connection success');
}).catch((error)=>{
    console.log('not connected',error);
})

