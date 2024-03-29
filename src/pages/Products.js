import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import ProductsData from '../data/ProductsData';

function Products() {
  const [pageItems, setPageItems] = useState(ProductsData);
  const [sortOpt, setSortOpt] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [filterTitles, setFilterTitles] = useState([]);

  const handleChange = (event) => {
    setSortOpt(event.target.value);
  };

  const setFilterTitlesFn = () => {
    const filterArray = [];
    ProductsData.forEach((el) => {
      filterArray.push(el.genre);
    });
    // return [...new Set(filterArray)];
  };

  useEffect(() => {
    if (sortOpt === 'high') {
      const newArr = [...pageItems];
      const newPg = newArr.sort((a, b) => b.price - a.price);
      setPageItems(newPg);
    }
    if (sortOpt === 'low') {
      const newArr = [...pageItems];
      const newPg = newArr.sort((a, b) => a.price - b.price);
      setPageItems(newPg);
    }
    if (sortOpt === 'new') {
      const newArr = [...pageItems];
      const newPg = newArr.sort((a, b) => b.date - a.date);
      setPageItems(newPg);
    }
  }, [sortOpt]);

  useEffect(() => {
    setFilterTitles(setFilterTitlesFn());
  }, []);

  return (
    <div className="product-page">
      <div
        className="product-tile"
      >
        <div className="product-title">
          <h1> Music </h1>
          <div className="sortby-container">
            <label htmlFor="sortby">
              Sort by:
              <select name="sortby" defaultValue="" onChange={(e) => handleChange(e)}>
                <option disabled hidden value=""> Select option</option>
                <option value="low">Lowest Price</option>
                <option value="high">Highest Price</option>
                <option value="new">Newest</option>
              </select>
            </label>
          </div>
        </div>
        {/* <div className="filter-products">
          {filterTitles?.map((el) => <li>{el}</li>)}
        </div> */}
        {
          pageItems?.map((el) => (
            <Link
              to={`/products/${el.id}`}
              state={el}
              key={el.id}
            >
              <Item
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
