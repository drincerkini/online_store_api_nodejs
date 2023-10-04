const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products with category details
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category_id');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, {
            new: true, // Return the updated product instead of the old one
            runValidators: true // Run Mongoose validators to ensure the updated data is valid
        }).populate('category_id'); // Optionally populate the category field

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

