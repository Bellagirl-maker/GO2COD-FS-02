const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { 

 })
  .then(() => {
    console.log("Connected to MongoDB for seeding.");
    seedProducts();
  })
  .catch(error => console.error("MongoDB connection error:", error));

const seedProducts = async () => {
  const products = [
    {
      name: "Moment Super fix",
      description: "A glue like no other.",
      price: 29.99,
      imageUrl: "https://img.freepik.com/free-vector/super-moment-glue-tube-realistic_1441-868.jpg?ga=GA1.1.1110670133.1731311795&semt=ais_hybrid"
    },
    {
      name: "Brand sunscreen",
      description: "A skincare product.",
      price: 49.99,
      imageUrl: "https://img.freepik.com/free-vector/realistic-sunscreen-ad-concept_52683-42614.jpg?ga=GA1.1.1110670133.1731311795&semt=ais_hybrid"
    },
    {
      name: "Sample Product 3",
      description: "A beauty skincare cream.",
      price: 19.99,
      imageUrl: "https://img.freepik.com/free-vector/realistic-sunscreen-ad_52683-43837.jpg?ga=GA1.1.1110670133.1731311795&semt=ais_hybrid"
    }
  ];

  try {
    await Product.insertMany(products);
    console.log("Sample products inserted successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting sample products:", error);
  }
};
