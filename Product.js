const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true,
        enum: ['250mg', '500mg', '1000mg'] // Example of allowed dosage options
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Price must be a non-negative number
    },
    stock: {
        type: Number,
        required: true,
        min: 0 // Stock must be a non-negative number
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Export the model
