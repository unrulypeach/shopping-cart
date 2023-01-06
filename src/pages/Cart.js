/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Cart({
  cart, removeItem, increaseQty, decreaseQty,
}) {
  const [subTotPrice, setSubTotPrice] = useState(0);

  useEffect(() => {
    setSubTotPrice(cart.reduce((p, c) => p + (c.itm.price * c.qty), 0));
  });
  return cart.length > 0 ? (
    <div className="cart-page">
      <h1> your cart </h1>
      <div
        className="cart-item header"
      >
        <span className="max-width"> Item </span>
        <span className="title"> Title </span>
        <span> Price </span>
        <span> Quantity </span>
        <span> Cost </span>
        <div> Remove </div>
      </div>
      <div
        className="cart-content"
      >
        {cart.map((item) => (
          // <Link
          //   to={`/products/${item.itm.id}`}
          // >
          <div className="cart-item" key={item.itm.id}>
            <img
              src={item.itm.pic[0]}
              alt={item.itm.alt[0]}
              height="75px"
              width="75px"
            />
            <span className="title">
              {item.itm.name}
            </span>
            <span className="extra-pad">
              {(item.itm.price).toFixed(2)}
            </span>
            <span className="extra-pad">
              <button
                type="button"
                className="change-qty"
                onClick={() => decreaseQty(item.itm.name)}
              >
                -
              </button>
              {item.qty}
              <button
                type="button"
                className="change-qty"
                onClick={() => increaseQty(item.itm.name)}
              >
                +
              </button>
            </span>
            <span className="extra-pad">
              {(Math.round(item.itm.price * item.qty * 100) / 100).toFixed(2)}
            </span>
            <button
              type="button"
              className="remove"
              onClick={() => removeItem(item.itm.name)}
            >
              remove
            </button>
          </div>
          // </Link>
        ))}
      </div>
      <div
        className="cart-summary"
      >
        <h2>
          subtotal:
          {(Math.round(subTotPrice * 100) / 100).toFixed(2)}
        </h2>
        <h2>
          Tax:
          {(Math.round(subTotPrice * 0.13 * 100) / 100).toFixed(2)}
        </h2>
        <h2>
          Total:
          {(Math.round(subTotPrice * 1.13 * 100) / 100).toFixed(2)}
        </h2>
        <button
          type="button"
        >
          Checkout
        </button>
      </div>

    </div>
  ) : <div className="empty-cart">Your cart is empty. Start shopping now!</div>;
}
