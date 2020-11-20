const express = require('express')
const hbs = require('express-hbs')
require('./hbs/helpers/helpers')

const app = express()

const port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS ENGINE
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/parciales'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//helpers 



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'David',
    });

});

app.get('/about', function (req, res) {

    res.render('about', {
    });

});


app.get('/data', function (req, res) {
    res.send('Hola data');

});


app.listen(port, () => { console.log( `Escuchando peticiones en el puerto ${port}`) })