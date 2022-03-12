const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const cors = require('cors'); /* cross-origin resource sharing */

const app = express();

const registrationRoute = require('./routes/registration');

app.use(bodyParser.json()); // supports json encoded bodies
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); /* cross-origin resource sharing */

app.use('/', registrationRoute);

sequelize.sync()
 .then(result => console.log('database sync: CHECK'))
 .catch(err => console.log(err));

app.listen(4000);
