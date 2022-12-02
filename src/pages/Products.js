import React from 'react';
import Item from '../components/Item';
import ProductsData from '../data/ProductsData';

function Products() {
  return (
    <div>
      {
        ProductsData.map((el) => (
          <Item
            key={el.id}
            src={el.pic[0]}
            name={el.name}
          />
        ))
      }
    </div>
  );
}

export default Products;
