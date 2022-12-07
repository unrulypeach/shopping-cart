import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ItemPg />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
