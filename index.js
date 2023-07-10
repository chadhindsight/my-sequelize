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
            res.send(bad)
        })
})

// Add new entry to db
app.post('/', async (req, res) => {
    // use the .create method to add entry
    const newBaddie = await baddie.create({
        ...req.body
    })
    res.send(newBaddie)
})

// Delete new entry

app.listen(PORT, console.log(`Server started on port ${PORT}!`));