const express = require('express');
const port = 9000;
const app = express();

const db = require('./config/db');

const path = require('path');

app.set("view engine","ejs");

const userModel = require("./models/UsersModel");

app.use(express.urlencoded());

const multer = require('multer');

//File Upload start

const fs = require('fs');

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const st = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'uploads')
    },
    filename : (req,file,cb) => {
        let unique = Math.floor(Math.random() * 100000);
        cb(null,`${file.fieldname}-${unique}`)
    }
})
const imageUpload = multer({ storage: st }).single('image');

//File Upload end

app.get('/',(req,res) => {
    return res.render("add");
})

app.post('/addUser',imageUpload,(req,res) => {
    const {name, email, password, gender, hobby, city} = req.body;

    userModel.create({
        userName : name,
        userEmail : email,
        userPassword : password,
        userGender : gender,
        userHobby : hobby,
        userCity : city,
        userImage : req.file?.path
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
    if(req.file){
        userModel.findById(editId)
            .then((singleRow) => {
                fs.unlinkSync(singleRow?.image)
                userModel.findByIdAndUpdate(editId, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    userGender : gender,
                    userHobby : hobby,
                    userCity : city,
                    userImage : req.file?.path
                }).then((user) => {
                    console.log("user update");
                    return res.redirect('/viewuser');
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }else{
        userModel.findById(editId)
            .then((singleRow) => {
                userModel.findByIdAndUpdate(editId, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    userGender : gender,
                    userHobby : hobby,
                    userCity : city,
                    userImage : req.file?.path
                }).then((user) => {
                    console.log("user update");
                    return res.redirect('/viewuser');
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
    
})
