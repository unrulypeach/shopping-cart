/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

export default function Cart({
  cart, removeItem, increaseQty, decreaseQty,
}) {
  const [subTotPrice, setSubTotPrice] = useState(0);

  useEffect(() => {
    setSubTotPrice(cart.reduce((p, c) => p + (c.itm.price * c.qty), 0));
  });
  return cart.length > 0 ? (
    <div className="cart-page">
      <div className="cart-items-list">
        <h1> My Bag </h1>
        <div className="cart-content">
          {cart.map((item) => (
            <div className="cart-item" key={item.itm.id}>
              <div className="left-pic-container">
                <img
                  src={item.itm.pic[0]}
                  alt={item.itm.alt[0]}
                />
              </div>
              <div className="right-info-container">
                <div className="top">
                  <div className="inner-top-title">
                    <span className="title">
                      {item.itm.name}
                    </span>
                  </div>
                  <div className="inner-bottom">
                    <div className="title-and-num">
                      <span className="hidden-on-mobile">Item Price</span>
                      <span className="cost-float-right">
                        {(item.itm.price).toFixed(2)}
                      </span>
                    </div>
                    <div className="title-and-num change-on-mobile">
                      <span className="cente hidden-on-mobile">Quantity</span>
                      <span className="change-qty">
                        <button
                          type="button"
                          className="change-qty decrease-qty"
                          onClick={() => decreaseQty(item.itm.name)}
                        >
                          -
                        </button>
                        {item.qty}
                        <button
                          type="button"
                          className="change-qty increase-qty"
                          onClick={() => increaseQty(item.itm.name)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div className="title-and-num hidden-on-mobile">
                      <span>Total Price</span>
                      <span className="cost-float-right">
                        {(Math.round(item.itm.price * item.qty * 100) / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div>
                    <span>Free Shipping + Returns</span>
                  </div>
                  <button
                    type="button"
                    className="remove"
                    onClick={() => removeItem(item.itm.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-summary">
        <h2> Order Summary </h2>
        <div className="cost-calc">
          <div className="section">
            <span> Subtotal: </span>
            <span>{(Math.round(subTotPrice * 100) / 100).toFixed(2)}</span>
          </div>
          <div className="section">
            <span>Tax:</span>
            <span>{(Math.round(subTotPrice * 0.13 * 100) / 100).toFixed(2)}</span>
          </div>
          <div className="section">
            <span>Total:</span>
            <span>{(Math.round(subTotPrice * 1.13 * 100) / 100).toFixed(2)}</span>
          </div>
        </div>
        <button
          type="button"
        >
          CHECKOUT
        </button>
      </div>

    </div>
  ) : <div className="empty-cart">Your cart is empty. Start shopping now!</div>;
}
