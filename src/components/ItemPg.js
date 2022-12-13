import React from 'react';
import { useLocation } from 'react-router-dom';

function ItemPg() {
  const { state } = useLocation();
  const location = useLocation();
  // eslint-disable-next-line no-console
  console.log(location);
  return state ? (
    <div>
      <img
        src={state.pic[0]}
        alt={state.alt[0]}
      />
      <div>
        <h1>{state.name}</h1>
        <h2>{state.artist}</h2>
        <p>{state.price}</p>
      </div>
      <div>
        <input
          type="number"
          placeholder="quantity"
        />
        <button
          type="button"
          onClick={}
        >
          Buy
        </button>
      </div>
    </div>
  ) : 'Item not found';
}

export default ItemPg;
