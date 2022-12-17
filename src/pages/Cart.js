/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

export default function Cart({ cart }) {
  const [subTotPrice, setSubTotPrice] = useState(0);
  // const [taxAmt, setTaxAmt] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setSubTotPrice(cart.reduce((p, c) => p + (c.itm.price * c.qty), 0));
  });
  return (
    <div>
      <h1> your cart </h1>
      <div
        className="cart-header"
      >
        <h2>Item</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Remove</h2>
      </div>
      <div
        className="cart-content"
      >
        <span> pic + name </span>
        <span> $ </span>
        <span> # </span>
        <span> - </span>
      </div>
      <div
        className="cart-summary"
      >
        <h2>
          subtotal:
          {Math.round(subTotPrice * 100) / 100}
        </h2>
        <h2>
          Tax:
          {Math.round(subTotPrice * 0.13 * 100) / 100}
        </h2>
        <h2>
          Total:
          {Math.round(subTotPrice * 1.13 * 100) / 100}
        </h2>
        <button
          type="button"
        >
          Checkout
        </button>
      </div>

    </div>
  );
}
