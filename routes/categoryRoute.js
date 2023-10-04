const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// POST: Create a new category
router.post('/', categoryController.createCategory);

// GET: Get all categories
router.get('/', categoryController.getAllCategories);

// PUT: Update a category by ID
router.put('/:id', categoryController.updateCategory);

// DELETE: Delete a category by ID
router.delete('/:id', categoryController.deleteCategory);


module.exports = router;
