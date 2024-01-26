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
    } else {
      setTotalQty(0);
    }

    // popup/signal to show item added?
  }, [cart]);

  function getItemInd(title) {
    return cart.findIndex((el) => el.itm.name === title);
  }

  function handleAddItem(itm, qty) {
    const getItmInd = getItemInd(itm.name);
    if (getItmInd === -1) {
      setCart((prev) => [...prev, { itm, qty }]);
    } else {
      const updatedQty = Number(cart[getItmInd].qty) + Number(qty);
      const cartSet = [...cart];
      const item = { ...cartSet[getItmInd] };
      item.qty = updatedQty;
      cartSet[getItmInd] = item;
      setCart(cartSet);
    }
  }

  function handleRemoveItem(title) {
    const getItmInd = getItemInd(title);
    const newCart = [...cart];
    newCart.splice(getItmInd, 1);
    setCart(newCart);
  }

  function increaseQty(title) {
    const itemInd = getItemInd(title);
    const newCart = [...cart];
    const item = { ...newCart[itemInd] };
    let currQty = Number(item.qty);
    currQty += 1;
    item.qty = currQty;
    newCart[itemInd] = item;
    setCart(newCart);
  }

  function decreaseQty(title) {
    const itemInd = getItemInd(title);
    const newCart = [...cart];
    const item = { ...newCart[itemInd] };
    let currQty = Number(item.qty);
    if (currQty > 0) {
      currQty -= 1;
      item.qty = currQty;
      newCart[itemInd] = item;
      setCart(newCart);
    }
  }

  return (
    <BrowserRouter>
      <Header qtySum={totalQty} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ItemPg addItem={(itm, qty) => handleAddItem(itm, qty)} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} removeItem={(title) => handleRemoveItem(title)} increaseQty={(title) => increaseQty(title)} decreaseQty={(title) => decreaseQty(title)} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
