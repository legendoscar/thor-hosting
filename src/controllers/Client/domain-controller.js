

/* The route controller for the login page */
exports.index = (req, res) => {
    res.render('client/domains', {layout: 'client_layout'});
}


exports.notFoundClientRoutes = (req, res) => {
    res.redirect('dashboard');
}