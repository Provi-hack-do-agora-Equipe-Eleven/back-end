const { Router } = require('express');
const userRoutes = Router();

const getUserProjects = require('../controllers/userControllers/getUserProjects');
const login = require('../controllers/userControllers/login');
const signup = require('../controllers/userControllers/signup');
const validateLogin = require('../middlewares/validateLogin');

userRoutes.post('/signup', signup);
userRoutes.post('/login', login);
userRoutes.use(validateLogin);
userRoutes.get('/projects', getUserProjects);

module.exports = userRoutes;
