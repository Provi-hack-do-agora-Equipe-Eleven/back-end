const { Router } = require('express');
const { getProjects } = require('../controllers/projects');
const routes = Router();

routes.get('/', getProjects);

module.exports = routes;
