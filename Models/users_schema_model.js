let mongoose = require('mongoose');

// Create a schema
let schema = mongoose.Schema;

// Create schema for users collection
let usersSchema = new schema(
    {
        name : String,
        email: String,
        password : String,
        mobile : Number
    },
    {collection:"users_table"}
);

let mongooseHidden = require("mongoose-hidden")();
usersSchema.set("toJSON",{
    virtuals:true,
});
usersSchema.plugin(mongooseHidden);

let usersModel =  mongoose.model('User',usersSchema);

module.exports = usersModel;