import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
              to={`/products/${el.id}`}
              state={el}
            >
              <Item
                key={el.id}
                src={el.pic[0]}
                alt={el.alt[0]}
                name={el.name}
                artist={el.artist}
                price={el.price}
              />
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Products;
