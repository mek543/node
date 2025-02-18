const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customercontroller');

// Define routes for customer operations
router.post('/', customerController.createCustomer); // Create a new customer
router.get('/', customerController.getAllCustomers); // Get all customers
router.get('/:id', customerController.getCustomerById); // Get a customer by ID
router.put('/:id', customerController.updateCustomer); // Update a customer by ID
router.delete('/:id', customerController.deleteCustomer); // Delete a customer by ID

module.exports = router;