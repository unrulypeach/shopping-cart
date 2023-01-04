/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Item({
  src, name, artist, alt, price,
}) {
  return (
    <div
      className="tile-item"
    >
      <img
        className="product-tile-pic"
        src={src}
        alt={alt}
        width="200px"
      />
      <span className="title">
        {` ${artist.toUpperCase()} `}
        -
        {` ${name.toLowerCase()} `}
      </span>
      <span className="price">
        $
        {price.toFixed(2)}
      </span>
    </div>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
