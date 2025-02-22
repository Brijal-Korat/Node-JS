const adminModel = require('../models/adminsModel');

const nodemailer = require('nodemailer');

const loginPage = (req, res) => { 
    if(res.locals?.users){
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const registerPage = (req, res) => {
    return res.render('register');
}

const loginUser = (req, res) => {
    try{
        return res.redirect('/dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await adminModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("User registered successfully..!");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const forgotPassword = async (req,res) => {
    try{
        const { useremail } = req.body;
        let user = await adminModel.findOne({email : useremail});

        if(!user){
            console.log("Email or Password are not valid..!");
            return res.redirect('/');
        }

        let otp = Math.floor(Math.random() * 1000000);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'brijalkorat@gmail.com',
              pass: 'oyfn qzeg yprh xlge'
            }
          });
          
          var mailOptions = {
            from: 'brijalkorat@gmail.com',
            to: useremail,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                let userotp = {
                    otp : otp,
                    email : useremail
                }
                console.log('Email sent: ' + info.response);
            }
          });

    }catch(err){
        console.log(err);
        return false;
    }
}

const newPasswordPage = (req,res) => {
    return res.render('newpassword');
}

const dashboardPage = (req, res) => {
    return res.render('dashboard');
}

const chartsPage = (req,res) => {
    return res.render('charts');
}

const tablesPage = (req,res) => {
    return res.render('tables');
}

const gridPage = (req,res) => {
    return res.render('grid');
}

const form_basicPage = (req,res) => {
    return res.render('form-basic');
}

const form_wizardPage = (req,res) => {
    return res.render('form_wizard');
}

const widgetsPage = (req,res) => {
    return res.render('widgets');
}

const logoutUser = (req,res) => {
    req.logout((err) => {
        if(err){
            console.log(err);
            return false;
        }
        return res.redirect('/');
    })
}

module.exports = {
    dashboardPage,
    chartsPage,
    widgetsPage,
    tablesPage,
    gridPage,
    form_basicPage,
    form_wizardPage,
    loginPage,
    registerPage,
    loginUser,
    registerUser,
    forgotPassword,
    newPasswordPage,
    logoutUser
}