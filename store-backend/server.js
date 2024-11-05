const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {  
 })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// Product Schema and Model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
});

const Product = mongoose.model("Product", productSchema);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
