import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ItemPg({ addItem }) {
  const ref = useRef(null);
  const { state } = useLocation();
  // const location = useLocation();
  // eslint-disable-next-line no-console
  return state ? (
    <div>
      <img
        src={state.pic[0]}
        alt={state.alt[0]}
      />
      <div>
        <h1>{state.name}</h1>
        <h2>
          by
          {' '}
          {state.artist}
        </h2>
        <p>
          $
          {state.price}
        </p>
      </div>
      <div>
        <input
          type="number"
          placeholder="quantity"
          ref={ref}
        />
        <button
          type="button"
          // eslint-disable-next-line no-console
          onClick={() => addItem(state, ref.current.value)}
        >
          Buy
        </button>
      </div>
    </div>
  ) : 'Item not found';
}
