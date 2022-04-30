const { Router } = require('express');
const userRoutes = require('./users.routes');
const projectRoutes = require('./projects.routes');
const routes = Router();

routes.use('/projects', projectRoutes);
routes.use('/users', userRoutes);

module.exports = routes;
