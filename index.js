const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();

// Habilitar Handlebars como view
app.engine('Handlebars',
    exphbs({
        defaultLayout: 'layout'

    })
);

app.set('view engine', 'handlebars');

app.use('/', router());

app.listen(5000);