const Customer = require('../models/customer');

// POST customer
exports.createCustomer = async (req, res) => {
    const { name, email, address } = req.body;

    try {
        const createdCustomer = await Customer.create({ name, email, address });
        res.status(201).json(createdCustomer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}   

// PUT customer
exports.updateCustomer = async (req, res) => {
    const customerId = req.params.id;
    const updatedCustomerData = req.body;

    try{
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updatedCustomerData, {
            new: true,
            runValidators: true
        });

        if(!updatedCustomer) {
            return res.status(404).json({ error: 'Customer not found!'});
        }
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE customer
exports.deleteCustomer = async (req, res) => {
    const customerId = req.params.id;

    try{
        const deletedCustomer = await Customer.findByIdAndDelete(customerId);

        if(!deletedCustomer) {
            return res.status(404).json({error: 'Customer not found!'});
        }

        res.json({message: 'Customer deleted Successfuly'});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}