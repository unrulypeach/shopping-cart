import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiCartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

// eslint-disable-next-line react/prop-types
function Header({ qtySum }) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = windowWidth <= 640;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {isMobile ? (
        <>
          <Icon path={mdiMenu} size={1} onClick={toggleMenu} />
          {menuOpen
            && (
            <div className="mobileMenu">
              <Link to="/" onClick={toggleMenu}> HOME </Link>
              <Link to="/products" onClick={toggleMenu}> SHOP </Link>
              <Link to="/about" onClick={toggleMenu}> ABOUT </Link>
              <Link to="/contact" onClick={toggleMenu}> CONTACT </Link>
            </div>
            )}
          <div>
            <Link to="/cart">
              <Icon path={mdiCartOutline} size={1} />
              <span className="cart-item-count">
                {qtySum === 0 ? 0 : qtySum}
              </span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/"> HOME </Link>
          </div>
          <div>
            <Link to="/products"> SHOP </Link>
            <Link to="/about"> ABOUT </Link>
            <Link to="/contact"> CONTACT </Link>
          </div>
          <div>
            <Link to="/cart">
              <Icon path={mdiCartOutline} size={1} />
              <span className="cart-item-count">
                {qtySum === 0 ? 0 : qtySum}
              </span>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
