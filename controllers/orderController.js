const Order = require('../models/order');

// POST a new order
exports.createOrder = async (req, res) => {
    const { customer_id, products, total_price, status } = req.body;

    try {
        const createdOrder = await Order.create({ customer_id, products, total_price, status });
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET orders
exports.getOrders = async (req, res) => {
    try{
        const orders = await Order.find().populate('customer_id products.product_id');
        res.json(orders);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}