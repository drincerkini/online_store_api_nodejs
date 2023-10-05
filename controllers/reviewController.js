const Review = require('../models/review');

// Create a new review
exports.createReview = async (req, res) => {
    const { product_id, customer_id, rating, comment } = req.body;

    try {
        const createdReview = await Review.create({ product_id, customer_id, rating, comment });
        res.status(201).json(createdReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all review with category details
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('product_id').populate('customer_id');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
    const reviewId = req.params.id;
    const updatedReviewData = req.body;

    try {
        const updatedReview = await Review.findByIdAndUpdate(reviewId, updatedReviewData, {
            new: true, // Return the updated review instead of the old one
            runValidators: true // Run Mongoose validators to ensure the updated data is valid
        }).populate('category_id'); // Optionally populate the category field

        if (!updatedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
    const reviewId = req.params.id;

    try {
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};