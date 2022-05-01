const { Router } = require('express');
const userRoutes = require('./users.routes');
const projectRoutes = require('./projects.routes');
const routes = Router();

routes.use('/users', userRoutes);
routes.use('/projects', projectRoutes);

module.exports = routes;
