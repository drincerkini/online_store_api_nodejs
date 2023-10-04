const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST: Create a new product
router.post('/', productController.createProduct);

// GET: Get all products with category details
router.get('/', productController.getAllProducts);

// PUT: Update a product by ID
router.put('/:id', productController.updateProduct);

// DELETE: Delete a product by ID
router.delete('/:id', productController.deleteProduct);


module.exports = router;
