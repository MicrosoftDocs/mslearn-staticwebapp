import React from 'react';

import { CardContent } from '../components';

function ProductList({products}) {
  return (
    <div>
      {products.length === 0 && <div>Loading data ...</div>}
      <ul className="list">
        {products.map((product) => (
          <li key={product.id} role="presentation">
            <div className="card">
              <CardContent
                name={product.name}
                description={product.description}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
