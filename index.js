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
app.get('/', async (req, res) => {
    try {
        const baddieList = await baddie.findAll()
        res.send(baddieList)
    }

    catch (error) {
        console.log('Error getting baddies', erorr);
    }
})

// Add new entry to db
app.post('/', async (req, res) => {
    // use the .create method to add entry
    const newBaddie = await baddie.create({
        ...req.body
    })
    res.send(newBaddie)
})


// Update an entry
app.put('/:id', async (req, res) => {
    const baddieID = req.params.id;
    const newData = req.body;

    try {
        const updatedBaddie = await baddie.update(newData, {
            where: { id: baddieID },
            returning: true
        })
        res.send(updatedBaddie)
    }
    catch (error) {
        console.log('Error updating entry:', error);
    }
})

// Get specific entry
app.get('/:id', async (req, res) => {
    const baddieID = req.params.id

    try {
        const baddieEntry = await baddie.findOne({
            where: { id: baddieID }
        })
        if (baddieEntry === 0) {
            // Baddie not found
            return res.status(404).json({ error: 'Entry not found.' });
        }
        res.send(baddieEntry)

    }
    catch (error) {
        console.log('Error finding that entry:', error);
    }
})


// Delete an entry
app.delete('/:id', async (req, res) => {
    const baddieID = req.params.id;

    try {
        const deletedEntry = await baddie.destroy({
            where: { id: baddieID }
        })
        if (deletedEntry === 0) {
            // If no rows were deleted, the ID doesn't exist
            return res.status(404).json({ error: 'Entry not found.' });
        }
        // Entry was deleted
        res.send('Entry deleted successfully!')
    }
    catch (error) {
        console.log('Error updating entry:', error);
    }
})

app.listen(PORT, console.log(`Server started on port ${PORT}!`));