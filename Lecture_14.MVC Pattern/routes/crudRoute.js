const express = require('express');
const { addCrud, viewCrud } = require('../controllers/crudController');

const routes = express.Router();

routes.get('/',viewCrud);
routes.get('/add',addCrud);

module.exports = routes;