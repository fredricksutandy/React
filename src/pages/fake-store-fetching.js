import React, { useState, useEffect } from 'react';

const FakeStoreFetching = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const handleToggleDescription = (productId) => {
    setExpandedDescriptions(prevState => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div className="w-full mt-14 sm:ml-64">
      <div className="px-8 sm:px-4 pb-8 pt-6">
        <h1 className="text-4xl font-bold text-black sm:text-5xl mb-8">Product List</h1>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white">
          {products.map(product => (
            <div key={product.id} className="bg-white border pt-10 p-4 flex flex-col relative">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto mb-4 h-full object-contain h-[120px] max-h-[120px]"
                style={{ maxWidth: '100px' }}
              />
              <h3 className="text-md font-semibold mb-2 overflow-hidden line-clamp-2">{product.title}</h3>              
              <p className="text-zinc-700 mb-2 text-lg font-bold">${product.price}</p>
              <div className="flex flex-col mb-2">
                <div className="text-gray-700 mb-1 text-sm flex-grow">
                  {expandedDescriptions[product.id]
                    ? product.description
                    : `${product.description.slice(0, 90)}...`}
                </div>
                {product.description.length > 90 && (
                  <button
                    className="text-blue-500 hover:underline text-start"
                    onClick={() => handleToggleDescription(product.id)}
                  >
                    {expandedDescriptions[product.id] ? 'See Less' : 'See More'}
                  </button>
                )}
              </div>
              <p className="absolute top-2 right-2 w-fit bg-blue-200 text-blue-700 mb-1 rounded-full px-3 py-1 text-[12px]">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FakeStoreFetching;
