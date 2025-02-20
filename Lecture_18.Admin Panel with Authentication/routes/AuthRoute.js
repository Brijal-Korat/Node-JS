const express = require('express');
const { dashboardPage, loginPage, registerPage, loginUser, registerUser, logoutUser } = require('../controllers/AuthController');

const routes = express.Router();
const passport = require('passport');

routes.get('/',loginPage);
routes.get('/register',registerPage);
routes.post('/loginuser',loginUser);
routes.post('/registeruser',registerUser);
routes.get('/dashboard',passport.checkUser,dashboardPage);
routes.get('/logout',logoutUser)
module.exports = routes;