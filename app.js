// importing and instantiating the express framework
const express = require('express');
const app = express();

// importing the handlebars template to be used by the view
const exphbs = require('express-handlebars');

// the preferred port for the application server
const port = process.env.PORT || 3100;

app.engine('hbs', exphbs({ // defining the view template as the imported handlebars module
    layoutsDir: __dirname + '/views/layouts', //the preferred layouts directory
    extname: 'hbs' //the preferred file extension name
}));

app.set('view engine', 'hbs'); //setting the tmeplate file extenstion
app.use(express.static('public')); // setting the path for static files

/* path to CSS andd JS files in Node Module */
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/aos/dist'));
app.use('/js', express.static(__dirname + '/node_modules/aos/dist'));


const homeRoutes = require('./src/routes/home-routes'); 
app.use('/', homeRoutes);

const authRoutes = require('./src/routes/auth-routes');
app.use('/auth', authRoutes);


// calling up my server to listen to a specific port with a custom message on success
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



