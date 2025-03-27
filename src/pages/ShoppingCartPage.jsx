import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-summary">
        <h2>Your Cart</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {cartItems.length === 0 && (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products">Continue Shopping</Link>
        </div>
      )}
      <div className="cart-actions">
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
        <button className="checkout">
          Checkout (Coming Soon)
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;