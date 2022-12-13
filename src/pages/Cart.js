import React from 'react';

export default function Cart() {
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
        <h2>subtotal:</h2>
        <h2> Tax: </h2>
        <h2> Total:</h2>
        <button
          type="button"
        >
          Checkout
        </button>
      </div>

    </div>
  );
}
