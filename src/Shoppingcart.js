import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCart);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + item.price, 0);
  };
  
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {cartItems.length}</p>
      <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
      <div>
        <h3>Available Items</h3>
        <button onClick={() => addItemToCart({ name: 'Item 1', price: 10 })}>Add Item 1</button>
        <button onClick={() => addItemToCart({ name: 'Item 2', price: 20 })}>Add Item 2</button>
        <button onClick={() => addItemToCart({ name: 'Item 3', price: 15 })}>Add Item 3</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
