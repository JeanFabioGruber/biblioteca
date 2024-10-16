const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', // Choose 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    logging: false, // Disable logging; default: console.log
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;