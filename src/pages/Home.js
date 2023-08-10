import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="App"
      // style={{ backgroundImage: `url(${homepage})` }}
    >
      <h1> The Best Casettes </h1>
      <div className="homeButton-container">
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="homepage-btn"
        >
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
}

export default Home;
