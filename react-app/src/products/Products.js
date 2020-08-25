import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader } from '../components';
import ProductList from './ProductList';
import useProducts from './useProducts';

function Products({}) {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  function handleRefresh() {
    getProducts();
  }

  return (
    <div className="content-container">
      <ListHeader
        title="Products"
        handleRefresh={handleRefresh}
        routePath="/products"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/products"
              component={() => <ProductList products={products} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Products;
