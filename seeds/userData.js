const { User } = require('../models');

const userData = [
    {
        "name": "",
        "email": "",
        "password": "password123"
    },
    {
        "name": "",
        "email": "",
        "password": "password123"
    },
    {
        "name": "",
        "email": "",
        "password": "password123"
    },
    
];

const seedData = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedData;