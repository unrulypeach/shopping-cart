import React from 'react';
import { useNavigate } from 'react-router-dom';
import homepage from './styles/images/homepage.jpg';
import './styles/App.scss';

function App() {
  const navigate = useNavigate();
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${homepage})` }}
    >
      <h1> The Best Casettes </h1>
      <button
        type="button"
        onClick={() => navigate('/products')}
        className="homepage-btn"
      >
        VIEW COLLECTION
      </button>
    </div>
  );
}

export default App;
