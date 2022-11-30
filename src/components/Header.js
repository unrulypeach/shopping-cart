import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
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
        <Link to="/error"> SEARCH </Link>
        <Link to="/error"> CART </Link>
      </div>
    </header>
  );
}

export default Header;
