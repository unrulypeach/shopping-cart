import React from 'react';
import Item from '../components/Item';
import ProductsData from '../data/ProductsData';

function Products() {
  return (
    <>
      <h1> Music </h1>
      <div
        className="product-tile"
      >
        {
          ProductsData.map((el) => (
            <Item
              key={el.id}
              src={el.pic[0]}
              name={el.name}
              artist={el.artist}
              price={el.price}
            />
          ))
        }
      </div>
    </>
  );
}

export default Products;
