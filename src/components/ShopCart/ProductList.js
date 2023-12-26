import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='mb-8'>
      <h2 className="text-xl font-bold text-black w-fit mb-4 w-auto">Product List</h2>
      <ul className='flex gap-4'>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
