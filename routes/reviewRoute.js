const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST: Create a new review
router.post('/', reviewController.createReview);

// GET Route
router.get('/', reviewController.getAllReviews);

// PUT Route
router.put('/:id', reviewController.updateReview);

// DELETE Route
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
