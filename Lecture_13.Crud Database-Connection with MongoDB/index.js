const express = require('express');
const port = 9000;
const app = express();

const db = require('./config/db');

const path = require('path');

app.set("view engine","ejs");

const userModel = require("./models/UsersModel");

app.use(express.urlencoded());

app.get('/',(req,res) => {
    return res.render("add");
})

app.post('/addUser',(req,res) => {
    const {name, email, password} = req.body;

    userModel.create({
        userName : name,
        userEmail : email,
        userPassword : password
    }).then((rcd) => {
        console.log(rcd);
        console.log("User Successfully created..!");
        return res.redirect("/");
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
    
})
