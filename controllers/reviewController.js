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
