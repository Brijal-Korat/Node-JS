const express = require('express');

const routes = express.Router();
const { addSubCategoryPage, viewSubCategoryPage } = require('../controllers/categoryController');

routes.get('/',viewSubCategoryPage);
routes.get('/addcategorypage',addSubCategoryPage);

module.exports = routes;    