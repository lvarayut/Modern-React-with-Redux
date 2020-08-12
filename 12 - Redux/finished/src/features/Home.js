import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Product from './Product';

function Home({ className, products }) {
  return (
    <div className={className}>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;
