const userModel = require('../models/usersModel')

const registerPage = (req,res) => {
    return res.render('register');
}

const loginPage = (req,res) => {
    return res.render('login');
}

const registerUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        await userModel.create({
            name : name,
            email : email,
            password : password
        });
        console.log("Data added..!");
        return res.redirect('/');
    }catch(err) {
        console.log(err);
        return false;
    }
} 

const dashboardPage = (req,res) => {
    return res.render('dashboard');
}

const contactPage = (req,res) => {
    return res.render('contact');
}

const aboutPage = (req,res) => {
    return res.render('about');
}

module.exports = {
    registerPage,
    loginPage,
    registerUser,
    dashboardPage,
    contactPage,
    aboutPage
}