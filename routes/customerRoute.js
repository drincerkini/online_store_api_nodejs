const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// POST: Create a new customer
router.post('/', customerController.createCustomer);

// GET
router.get('/', customerController.getCustomers);

//PUT 
router.put('/:id', customerController.updateCustomer);

// DELETE
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
