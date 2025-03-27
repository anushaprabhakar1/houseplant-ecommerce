import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Green Haven</Link>
        </div>
        <div className="nav-links">
          <Link to="/products">Shop Plants</Link>
          <Link to="/cart">
            <div className="cart-icon">
              🛒 {totalItems}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;