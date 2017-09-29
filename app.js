const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const users = require('./routes/users');
const config = require('./config/database');

// Mongoose
mongoose.connect(config.uri, { useMongoClient: true, promiseLibrary: global.Promise });

// On Connection
mongoose.connection.on('connected', () => {
   console.log('Connected to database: ' + config.uri);
});

// On Error
mongoose.connection.on('error', (err) => {
   console.log('Database error: ' + err);
});

// Express
const app = express();

// PORT Number
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);

app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
   res.send('Endpoint Inválido');
});

// Start Server
app.listen(port, () => {
   console.log('Server started on port ' + port);
});