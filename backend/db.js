const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://chanikyamc2222:Chanikyamc22@cluster0.7fbufej.mongodb.net/fooddelivery?retryWrites=true&w=majority&appName=Cluster0"; // Hide actual URI for security

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');

        // Fetch food items and categories
        const fetchedFoodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const fetchedFoodCategories = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        // Set global variables
        global.foodData = fetchedFoodItems;
        global.foodCategory = fetchedFoodCategories;

        console.log('Data fetched and global variables set');
        console.log('Food Items:', global.foodData);
        console.log('Food Categories:', global.foodCategory);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1); // Ensure non-zero exit on failure
    }
};

module.exports = mongoDB;
