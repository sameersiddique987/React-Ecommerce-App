
import React, { useState, useEffect } from "react";

function AddToCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const syncLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

  
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.min(3, item.quantity + 1) } : item
    );
    setCartItems(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    
    window.dispatchEvent(new Event("cartUpdated"));
  };
  

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-4 shadow-md rounded-lg border">
              <img src={item.image} alt={item.title} className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-lg" />
              <div className="flex-1 text-center sm:text-left sm:ml-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center mt-3 sm:mt-0">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-red-500 text-white rounded-l-md">-</button>
                <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-green-500 text-white rounded-r-md">+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="mt-3 sm:mt-0 sm:ml-4 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4 text-center">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
