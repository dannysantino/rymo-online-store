require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));