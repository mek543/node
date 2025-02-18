const db = require('../../config/dbconfig');

const Customer = {
    create: (data, callback) => {
        const sql = 'INSERT INTO customers (title, description, date, location, organizer) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [data.title, data.description, data.date, data.location, data.organizer], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM customers';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE customers SET title = ?, description = ?, date = ?, location = ?, organizer = ? WHERE id = ?';
        db.query(sql, [data.title, data.description, data.date, data.location, data.organizer, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Customer;