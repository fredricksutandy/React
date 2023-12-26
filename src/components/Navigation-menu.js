// Navigation.jsx

import React from 'react';

const Navigation = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex">
          <button className="p-4 group">
            About us
          </button>
          <button className="p-4 group">
            Products
          </button>
          <button className="p-4 group">
            Contact us
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">Link 1</a>
          <a href="#" className="hover:text-gray-300">Link 2</a>
          <a href="#" className="hover:text-gray-300">Link 3</a>
        </div>
      </div>

      {/* Mega Menu Content */}
      <div className="hidden group-hover:flex flex-col absolute top-full left-0 w-full bg-white p-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">About us</h2>
            <a href="">Mission</a>
            <a href="">Vision</a>
            <a href="">Milestone</a>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Products</h2>
            <a href="">Electronics</a>
            <a href="">Menswear</a>
            <a href="">Womenswear</a>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact us</h2>
            <a href="">Mail us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
