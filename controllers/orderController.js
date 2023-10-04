const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
    const { customer_id, products, total_price, status } = req.body;

    try {
        const createdOrder = await Order.create({ customer_id, products, total_price, status });
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
