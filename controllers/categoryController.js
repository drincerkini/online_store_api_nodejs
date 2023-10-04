const Category = require('../models/category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const products = await Product.find({ category_id: categoryId }).populate('category_id');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const updatedCategoryData = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updatedCategoryData, {
            new: true, // Return the updated category instead of the old one
            runValidators: true // Run Mongoose validators to ensure the updated data is valid
        });

        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};