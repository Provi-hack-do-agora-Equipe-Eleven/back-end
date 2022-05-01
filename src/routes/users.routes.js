const { Router } = require('express');
const userRoutes = Router();

const getUserProjects = require('../controllers/userControllers/getUserProjects');
const login = require('../controllers/userControllers/login');
const signup = require('../controllers/userControllers/signup');
const validateLogin = require('../middlewares/validateLogin');
const verifyFields = require('../middlewares/userMiddlewares/verifyFields');
const verifyLogin = require('../middlewares/userMiddlewares/verifyLogin');

userRoutes.post('/signup', verifyFields, signup);
userRoutes.post('/login', verifyLogin, login);
userRoutes.use(validateLogin);
userRoutes.get('/projects', getUserProjects);

module.exports = userRoutes;
