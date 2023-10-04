const Customer = require('../models/customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
    const { name, email, address } = req.body;

    try {
        const createdCustomer = await Customer.create({ name, email, address });
        res.status(201).json(createdCustomer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
