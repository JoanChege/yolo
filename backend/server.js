const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
const MONGODB_URI = 'mongodb+srv://jncheg:joannalee@cluster0.te6tjxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('Database connected successfully');
});

// Check for DB Errors
db.on('error', (error) => {
    console.error('Database connection error:', error);
});

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

// Multer middleware
app.use(upload.array());

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
