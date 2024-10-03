// Import necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const Product = require('./Product'); // Import the Product model

const app = express();
const PORT = process.env.PORT || 3001; // Change to 3001 or any other free port

// Firebase Admin SDK initialization
const serviceAccount = require("D:/Java Projects/Wagh Heart Care/WaghHeartCare/pharmacy-backend/waghhospital-25750-firebase-adminsdk-n1g5n-022939ead9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
// MongoDB connection URI
const mongoURI = 'mongodb+srv://manimeow1435:wwewwe%40wwe@cluster0.9pb2t.mongodb.net/mydatabase?retryWrites=true&w=majority';
 // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Pharmacy Backend API');
});

// Add a new product
app.post('/products', async (req, res) => {
    const { name, dosage, price, stock } = req.body;

    // Validate the input data
    if (!name || !dosage || !price || !stock) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const product = new Product({ name, dosage, price, stock });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
