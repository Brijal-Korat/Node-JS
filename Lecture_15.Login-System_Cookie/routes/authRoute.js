const express = require('express');
const { registerPage, loginPage, registerUser, dashboardPage, aboutPage, contactPage } = require('../controllers/authController');

const routes = express.Router();

routes.get('/register',registerPage);
routes.get('/',loginPage);
routes.post('/registeruser',registerUser);
routes.get('/dashboard',dashboardPage);
routes.get('/about',aboutPage);
routes.get('/contact',contactPage);

module.exports = routes;