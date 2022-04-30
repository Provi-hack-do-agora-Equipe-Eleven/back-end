const { Router } = require('express');
const projectRoutes = Router();

const getProjects = require('../controllers/projectControllers/getProjects');
const createProject = require('../controllers/projectControllers/createProject');
const updateProject = require('../controllers/projectControllers/updateProject');
const deleteProject = require('../controllers/projectControllers/deleteProject');
const verifyFields = require('../middlewares/projectMiddlewares/verifyFields');
const verifyIfEmailExists = require('../middlewares/projectMiddlewares/verifyIfEmailExists');
const verifyIfProjectExists = require('../middlewares/projectMiddlewares/verifyIfProjectExists');
const validateLogin = require('../middlewares/validateLogin');

projectRoutes.get('/', getProjects);
projectRoutes.use(validateLogin);
projectRoutes.post('/', verifyFields, verifyIfEmailExists, createProject);
projectRoutes.put('/:id', verifyIfProjectExists, verifyIfEmailExists, updateProject);
projectRoutes.delete('/:id', verifyIfProjectExists, deleteProject);

module.exports = projectRoutes;
