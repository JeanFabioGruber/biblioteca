const sequelize = require('../sequelize/connections')
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

sequelize.authenticate();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});