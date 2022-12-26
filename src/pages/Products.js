import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import ProductsData from '../data/ProductsData';

function Products() {
  return (
    <>
      <div>
        <h1> Music </h1>
        <div className="sortby-container">
          <label htmlFor="sortby">
            Sort by:
            <select name="sortby">
              <option value="Lowest Price">Lowest Price</option>
              <option value="Highest Price">Highest Price</option>
              <option value="Newest">Newest</option>
            </select>
          </label>
        </div>
      </div>

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
