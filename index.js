const express = require('express');
const baddie = require('./models/Baddie.js')
const PORT = 8000;
const app = express();
// Allows you to parse the body
app.use(express.json());

//Database
const db = require('./config/db');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// ROUTES
app.get('/', (req, res) => {
    baddie.findAll()
        .then(bad => {
            console.log(bad)
            res.send(bad)
        })
})


app.listen(PORT, console.log(`Server started on port ${PORT}!`));