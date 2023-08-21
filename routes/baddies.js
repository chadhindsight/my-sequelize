const express = require("express");
const router = express.Router();
const baddie = require('./models/Baddie.js');


// CRUD for baddies
router.get('/', async (req, res) => {
    try {
        const baddieList = await baddie.findAll()
        res.send(baddieList)
    }

    catch (error) {
        console.log('Error getting baddies', erorr);
    }
})

// Add new entry to db
router.post('/', async (req, res) => {
    // use the .create method to add entry
    const newBaddie = await baddie.create({
        ...req.body
    })
    // Show full baddie list after adding a new entry
    console.log(`The new entry is ${newBaddie}`);
    res.redirect("/")
})


// Update an entry
router.put('/:id', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

module.exports = router;