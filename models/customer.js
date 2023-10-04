const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    created_at: { type: Date, default: Date.now }
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;