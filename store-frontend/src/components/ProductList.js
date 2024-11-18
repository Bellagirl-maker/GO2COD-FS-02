import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Online Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl font-bold mt-4">${product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ProductList;
