const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    products: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
            quantity: Number
        }
    ],
    total_price: Number,
    order_date: { type: Date, default: Date.now },
    status: String
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;