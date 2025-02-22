const express = require('express');

const { dashboardPage, loginPage, registerPage, loginUser, registerUser, logoutUser,chartsPage, widgetsPage, tablesPage, gridPage,form_basicPage,form_wizardPage, forgotPassword, newPasswordPage } = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport');

routes.get('/',loginPage);
routes.get('/register',registerPage);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect :'/'}),loginUser);
routes.post('/registeruser',registerUser);
routes.get('/dashboard',passport.checkUser, dashboardPage);
routes.get('/charts',passport.checkUser, chartsPage);
routes.get('/widgets',passport.checkUser, widgetsPage);
routes.get('/tables',passport.checkUser, tablesPage);
routes.get('/grid',passport.checkUser, gridPage);
routes.get('/form-basic',passport.checkUser, form_basicPage);
routes.get('/form-wizard',passport.checkUser, form_wizardPage);
routes.get('/forgotpassword',forgotPassword);
routes.get('/newpassword',newPasswordPage);
routes.get('/logout',logoutUser);

module.exports = routes;