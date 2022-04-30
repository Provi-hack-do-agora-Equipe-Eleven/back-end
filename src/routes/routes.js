const { Router } = require('express');
const usersCadastre = require('../controllers/usersCadastre')

const routes = Router();

//cadastre
routes.post('/user', usersCadastre.cadastre)

module.exports = routes;
