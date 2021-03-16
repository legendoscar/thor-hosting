

/* The route controller for the login page */
exports.index = (req, res) => {
    res.render('auth/login');
}


/* The route controller for the register page */
exports.register = (req, res) => {
    res.render('auth/register');
}


/* The route controller for the forget password page */
exports.forget_password = (req, res) => {
    res.render('auth/forgot-password');
} 