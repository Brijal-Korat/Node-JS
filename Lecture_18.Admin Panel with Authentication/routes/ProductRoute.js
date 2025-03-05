const express = require('express');
const { viewProductsPage, addProductsPage } = require('../controllers/ProductController');

const routes = express.Router();

routes.get('/',viewProductsPage);
routes.get('/addproductspage',addProductsPage);

module.exports = routes;