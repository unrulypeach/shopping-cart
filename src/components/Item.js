import React from 'react';
import PropTypes from 'prop-types';

function Item({ src, name, descript }) {
  return (
    <div>
      <img
        src={src}
        alt={descript}
      />
      <h1>{name}</h1>
    </div>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
};

export default Item;
