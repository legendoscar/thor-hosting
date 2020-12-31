// require express and the router modules
const router = require('express').Router();


// import the home controller
const homeController = require('../controllers/home-controller');


// assigning the index route to the index controller using a get request
router.get('/', homeController.index);


// exporting the router module 
module.exports = router;