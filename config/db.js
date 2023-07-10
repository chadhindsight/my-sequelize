const Sequelize = require('sequelize');

// Establishes connection configurations to the specified db
module.exports = new Sequelize('baddb', 'me', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});