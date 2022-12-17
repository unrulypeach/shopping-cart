/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Products from './pages/Products';
import ItemPg from './components/ItemPg';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // change number next to cart icon
    if (cart.length > 0) {
      setTotalQty(cart.reduce((p, c) => p + Number(c.qty), 0));
    }
    // eslint-disable-next-line no-console
    console.log(totalQty);
    // popup/signal to show item added?
  }, [cart]);

  function handleAddItem(itm, qty) {
    setCart((prev) => [...prev, { itm, qty }]);
    // eslint-disable-next-line no-console
    console.log(cart);
  }

  return (
    <BrowserRouter>
      <Header qtySum={totalQty} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ItemPg addItem={(itm, qty) => handleAddItem(itm, qty)} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
