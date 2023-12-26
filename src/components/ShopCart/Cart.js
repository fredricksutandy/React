import React from 'react';

const Cart = ({ cart, removeFromCart, products, removeFromCartOne, addToCartOne }) => {
  // Function to calculate the subtotal for a specific product
  const calculateSubtotal = (product, quantity) => {
    return product.price * quantity;
  };

  // Calculate the total price for all items in the cart
  const calculateTotalPrice = () => {
    let total = 0;
    Object.keys(cart).forEach((productId) => {
      const product = products.find((p) => p.id === parseInt(productId, 10));
      if (product) {
        total += calculateSubtotal(product, cart[productId]);
      }
    });
    return total;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-black w-fit mb-2 w-auto">Your Cart</h2>
      <p className='mb-4 text-lg font-bold'>Total: ${calculateTotalPrice()}</p>
      {Object.keys(cart).length === 0 ? (
        <p className="text-gray-500 ml-5">No items</p>
      ) : (
      <ul className="w-fit gap-4 flex flex-row flex-wrap">
        {Object.keys(cart).map((productId) => {
          const product = products.find((p) => p.id === parseInt(productId, 10));
          if (product) {
            return (
              <li key={productId} className="flex flex-col gap-5 border p-3 rounded bg-white shadow-sm">
                <p className="font-bold text-lg">{product.name} - ${product.price} </p>
                <div className="flex gap-4 items-center w-fit">
                    <button className='border px-3 py-2' onClick={() => removeFromCartOne(product)}>-</button>
                    <p className="text-lg">x{cart[productId]}</p>
                    <button className='border px-3 py-2' onClick={() => addToCartOne(product)}>+</button>
                </div>
                <div>
                    <p className="text-md text-gray-500">Subtotal: ${calculateSubtotal(product, cart[productId])}</p>
                    <button className='text-red-500 w-fit text-sm' onClick={() => removeFromCart(product)}>Remove</button>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
      )}
    </div>
  );
};

export default Cart;


