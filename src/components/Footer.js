import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="site-links">
        <h2>SITE LINKS</h2>
        <Link to="/products"> SHOP </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contact"> CONTACT </Link>
      </div>
      <div>
        <h2>SIGN UP FOR OUR NEWSLETTER</h2>
        <label
          htmlFor="newsletter"
        >
          <input
            className="input-box"
            type="text"
            placeholder="YOUR E-MAIL ADDRESS"
            id="newsletter"
          />
        </label>
        <button
          className="input-box"
          id="submit-btn"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
      <div className="address">
        <h2>COME FIND US!</h2>
        <span>123 CASETTE AVE.</span>
        <span>
          MICROCASETTE, CASETTE
        </span>
        <span>
          C4S3TT3
        </span>
      </div>
    </footer>
  );
}

export default Footer;
