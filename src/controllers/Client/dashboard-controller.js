

/* The route controller for the dashboard page */
exports.index = (req, res) => {
    res.render('client/dashboard', {layout: 'client_layout'});
}


// exports.notFoundClientRoutes = (req, res) => {
//     res.redirect('dashboard');
// }