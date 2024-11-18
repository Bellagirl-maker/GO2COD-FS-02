const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/Product')
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {  
 })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
});


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

app.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products" });
    }
  });
  
  // Additional routes for cart management can be added here if needed
  
