 // require express and the router modules
const router = require('express').Router();


// import the home controller
const domainController = require('../../controllers/Client/domain-controller');


// assigning the domain route to the index controller using a get request
router.get('/', domainController.index);


// router.get('/*', domainController.notFoundClientRoutes);

// exporting the router module 
module.exports = router; 