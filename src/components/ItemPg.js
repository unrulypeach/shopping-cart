import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function ItemPg({ addItem }) {
  const ref = useRef(null);
  const { state } = useLocation();

  return state ? (
    <div className="item-content">
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
        <input
          type="number"
          defaultValue="1"
          min={1}
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
      <div className="item-description">
        <h3>DESCRIPTION</h3>
        <hr />
        <p>
          {state.info}
        </p>
      </div>
    </div>
  ) : 'Item not found';
}

ItemPg.propTypes = {
  addItem: PropTypes.func.isRequired,
};
