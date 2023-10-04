const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// POST: Create a new customer
router.post('/', customerController.createCustomer);

module.exports = router;
