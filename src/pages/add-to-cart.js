import React, { useState } from 'react';
import Cart from '../components/ShopCart/Cart';
import ProductList from '../components/ShopCart/ProductList';

function AddtoCartPage() {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
    { id: 3, name: 'Product 3', price: 8.99 },
  ];

  const addToCart = (product) => {
    if (cart[product.id]) {
      const updatedCart = { ...cart, [product.id]: cart[product.id] + 1 };
      setCart(updatedCart);
    } else {
      const updatedCart = { ...cart, [product.id]: 1 };
      setCart(updatedCart);
    }
  };

  const removeFromCartOne = (product) => {
    if (cart[product.id]) {
      const updatedCart = { ...cart };
      if (cart[product.id] > 1) {
        updatedCart[product.id] -= 1;
      } else {
        delete updatedCart[product.id];
      }
      setCart(updatedCart);
    }
  };

  const addToCartOne = (product) => {
    if (cart[product.id]) {
      const updatedCart = { ...cart };
      updatedCart[product.id] += 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      delete updatedCart[product.id];
      setCart(updatedCart);
    }
  };
  

  return (
    <div className='w-full mt-14 sm:ml-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Shopping cart</h1>
        <div>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} products={products} removeFromCart={removeFromCart} removeFromCartOne={removeFromCartOne} addToCartOne={addToCartOne}/> {/* Pass the products prop to Cart */}
        </div>
      </div>
    </div>
  );
}

export default AddtoCartPage;
