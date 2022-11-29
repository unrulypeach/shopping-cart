import React from 'react';

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

export default Item;
