const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST: Create a new order
router.post('/', orderController.createOrder);

// GET Route
router.get('/', orderController.getOrders);

// PUT Route
router.put('/:id', orderController.updateOrder);

// DELETE Route
router.delete('/:id', orderController.deleteOrder);

module.exports = router;

