import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/products"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
      <div>
        <Link to="/error"> Search </Link>
        <Link to="/error"> Shopping Cart </Link>
      </div>
    </header>
  );
}

export default Header;
