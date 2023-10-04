const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    rating: Number,
    comment: String,
    created_at: { type: Date, default: Date.now }
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
