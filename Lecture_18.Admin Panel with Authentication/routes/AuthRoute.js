const express = require('express');

const { dashboardPage, loginPage, registerPage, loginUser, registerUser, logoutUser,chartsPage, widgetsPage, tablesPage, gridPage,form_basicPage,form_wizardPage, forgotPassword, newPasswordPage, userOtp, otpPage, changePassword } = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport');

routes.get('/',loginPage);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect :'/'}),loginUser);

routes.get('/register',registerPage);
routes.post('/registeruser',registerUser);

routes.post('/forgotpassword',forgotPassword);

routes.get('/otp',otpPage);
routes.post('/userotp',userOtp);

routes.get('/newpassword',newPasswordPage);
routes.post('/changepassword',changePassword);

routes.get('/logout',logoutUser);

//pages
routes.get('/dashboard',passport.checkUser, dashboardPage);
routes.get('/charts',passport.checkUser, chartsPage);
routes.get('/widgets',passport.checkUser, widgetsPage);
routes.get('/tables',passport.checkUser, tablesPage);
routes.get('/grid',passport.checkUser, gridPage);
routes.get('/form-basic',passport.checkUser, form_basicPage);
routes.get('/form-wizard',passport.checkUser, form_wizardPage);

module.exports = routes;