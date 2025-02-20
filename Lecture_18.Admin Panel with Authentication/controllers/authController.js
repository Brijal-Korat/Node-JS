const adminModel = require('../models/adminsModel');

const loginPage = (req, res) => {
    if(req.locals?.users){
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const registerPage = (req, res) => {
    return res.render('register');
}

const loginUser = async (req, res) => {
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

const dashboardPage = (req, res) => {
    return res.render('dashboard');
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
    loginPage,
    registerPage,
    loginUser,
    registerUser,
    logoutUser
}