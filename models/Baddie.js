const Sequelize = require('sequelize');
const db = require('../config/db');

const Bad = db.define('baddie', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

module.exports = Bad;