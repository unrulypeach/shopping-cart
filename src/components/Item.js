import React from 'react';
import PropTypes from 'prop-types';

function Item({
  src, name, artist, descript, price,
}) {
  return (
    <div
      className="tile-item"
    >
      <img
        src={src}
        alt={descript}
        width="200px"
      />
      <span>{name}</span>
      <span>{artist}</span>
      <span>
        {price}
        $
      </span>
    </div>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
