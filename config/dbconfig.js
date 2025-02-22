const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: localhost,
    user: root,
    password: "",
    database: Events
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;