import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import ProductsData from '../data/ProductsData';

function Products() {
  const [pageItems, setPageItems] = useState(ProductsData);
  const [sortOpt, setSortOpt] = useState('');
  // eslint-disable-next-line no-unused-vars
  const sortLowFirst = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  const handleChange = (event) => {
    setSortOpt(event.target.value);
  };

  useEffect(() => {
    if (sortOpt === 'high') {
      setPageItems(pageItems.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      }));
    } else if (sortOpt === 'low') {
      setPageItems(pageItems.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      }));
    } else if (sortOpt === 'new') {
      setPageItems(pageItems.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      }));
    }
  }, [sortOpt]);

  return (
    <div className="product-page">
      <div>
        <h1> Music </h1>
        <div className="sortby-container">
          <label htmlFor="sortby">
            Sort by:
            <select name="sortby" onChange={(e) => handleChange(e)}>
              <option selected disabled hidden value=""> Select option</option>
              <option value="low">Lowest Price</option>
              <option value="high">Highest Price</option>
              <option value="new">Newest</option>
            </select>
          </label>
        </div>
      </div>

      <div
        className="product-tile"
      >
        {
          pageItems.map((el) => (
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
    </div>
  );
}

export default Products;
