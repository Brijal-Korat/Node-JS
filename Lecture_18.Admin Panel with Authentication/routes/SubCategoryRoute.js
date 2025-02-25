const express = require('express');
const { addSubCategoryPage, viewSubCategoryPage, insertSubCategory } = require('../controllers/SubCategoryController');

const routes = express.Router();

routes.get('/',viewSubCategoryPage);
routes.get('/addsubcategorypage',addSubCategoryPage);
routes.post('/insertsubcategory',insertSubCategory);

module.exports = routes;