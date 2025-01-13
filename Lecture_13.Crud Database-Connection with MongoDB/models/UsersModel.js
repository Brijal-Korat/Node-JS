const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    }
})

const Users = mongoose.model("user", userSchema);
module.exports = Users;