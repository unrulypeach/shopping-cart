import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <label
        htmlFor="newsletter"
      >
        Sign up to get the best deals!
        <input
          type="text"
          placeholder="e-mail"
          id="newsletter"
        />
      </label>
      <div>
        123 Address St.
      </div>
    </footer>
  );
}

export default Footer;
