 // require express and the router modules
const router = require('express').Router();


// import the home controller
const domainController = require('../../controllers/Client/domain-controller');


// assigning the domain route to the index controller using a get request
router.get('/', domainController.index);


// assigning the domain route to the new controller using a get request
router.get('/new', domainController.new);


router.get('/www.*', domainController.domainItem);

// exporting the router module 
module.exports = router; 