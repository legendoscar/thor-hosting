 // require express and the router modules
const router = require('express').Router();


// import the home controller
const dashboardController = require('../../controllers/Client/dashboard-controller');


// assigning the dashboard route to the index controller using a get request
router.get('/', dashboardController.index);


// router.get('/*', dashboardController.notFoundClientRoutes);

// exporting the router module 
module.exports = router; 