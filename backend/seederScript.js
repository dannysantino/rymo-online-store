require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');


const seedDB = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log('Data successfully seeded');
        process.exit();
    } catch (error) {
        console.error('Error encounted with seeding', error);
        process.exit(1);
    }
}

seedDB();