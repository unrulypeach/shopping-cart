import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

// eslint-disable-next-line react/prop-types
function Header({ qtySum }) {
  return (
    <header>
      <div>
        <Link to="/"> HOME </Link>
      </div>
      <div>
        <Link to="/products"> SHOP </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contact"> CONTACT </Link>
      </div>
      <div>
        <Link to="/search"> SEARCH </Link>
        <Link to="/cart">
          CART
          {qtySum === 0 ? 0 : qtySum}
        </Link>
      </div>
    </header>
  );
}

export default Header;
