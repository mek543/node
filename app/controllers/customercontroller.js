const Customer = require('../models/customermodels');

exports.createCustomer = (req, res) => {
    const customerData = req.body;
    Customer.create(customerData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Customer created', id: result.insertId });
    });
};

exports.getAllCustomers = (req, res) => {
    Customer.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.getCustomerById = (req, res) => {
    const id = req.params.id;
    Customer.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(result[0]);
    });
};

exports.updateCustomer = (req, res) => {
    const id = req.params.id;
    const customerData = req.body;
    Customer.update(id, customerData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Customer updated' });
    });
};

exports.deleteCustomer = (req, res) => {
    const id = req.params.id;
    Customer.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Customer deleted' });
    });
};