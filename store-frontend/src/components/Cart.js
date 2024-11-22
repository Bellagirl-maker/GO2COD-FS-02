import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext); 

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          {cart.map(item => (
            <div key={item._id} className="flex justify-between items-center mb-4">
              <h3 className="text-lg">{item.name}</h3>
              <div className="text-gray-600">${item.price} x {item.quantity}</div>
              <button 
                onClick={() => removeFromCart(item._id)} 
                className="text-red-500 hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold text-right">Total: ${getTotalPrice()}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
