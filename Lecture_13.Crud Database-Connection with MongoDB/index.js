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
    const {name, email, password, gender, hobby, city} = req.body;

    userModel.create({
        userName : name,
        userEmail : email,
        userPassword : password,
        userGender : gender,
        userHobby : hobby,
        userCity : city
    }).then((rcd) => {
        console.log(rcd);
        console.log("User Successfully created..!");
        return res.redirect("/");
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/viewUser',(req,res) => {
    userModel.find({})
    .then((rcd) => {
        return res.render('view',{
            rcd
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/deleteUser',(req,res) => {
    let id = req.query.delId;

    userModel.findByIdAndDelete(id)
    .then((delData) => {
        console.log("Data deleted..!");
        return res.redirect("/viewUser");
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/editUser',(req,res) => {
    let id = req.query.editId;
    
    userModel.findById(id)
    .then((single) => {
        return res.render('edit',{
            single
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/updateUser',(req,res) => {
    const {editId, name, email, password, gender, hobby, city} = req.body;

    userModel.findByIdAndUpdate(editId,{
        userName : name,
        userEmail : email,
        userPassword : password,
        userGender : gender,
        userHobby : hobby,
        userCity : city
        }).then((editData) => {
        console.log("Data updated..!");
        return res.redirect("/viewUser");
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
