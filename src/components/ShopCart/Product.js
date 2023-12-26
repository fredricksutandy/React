import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <li className="item-card mb-4 max-w-[300px] w-full min-w-[200px] bg-white shadow-sm">
      <div className="p-3">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
      <button className='flex justify-between py-3 px-4 transition-all focus:bg-blue-900 bg-blue-600 hover:bg-blue-700 w-full mt-2 text-white font-bold text-right' onClick={() => addToCart(product)}>Add to Cart <span>+</span></button>
    </li>
  );
};

export default Product;
