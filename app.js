const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3100;


app.engine('hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



