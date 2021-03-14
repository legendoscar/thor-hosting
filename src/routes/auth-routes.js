// require express and the router modules
const router = require('express').Router();


// import the home controller
const authController = require('../controllers/auth-controller');


// assigning the login route to the index controller using a get request
router.get('/login', authController.index);

// assigning the register route to the index controller using a get request
router.get('/register', authController.register);


// assigning the forget password route to the index controller using a get request
router.get('/forgot-password', authController.forget_password);


// exporting the router module 
module.exports = router; 