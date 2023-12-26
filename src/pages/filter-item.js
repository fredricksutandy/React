import React, { useState } from 'react';
import ItemList from '../components/FilterItem/ItemList';

function FilterSort() {

  const cards = [
    
  { 
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: "$49.99",
    status: "In stock",
    description: "Genuine leather wallet with multiple card slots and a sleek design."
  },
  { 
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: "$149.99",
    status: "Out of stock",
    description: "Immerse yourself in high-quality sound with these wireless headphones featuring active noise cancellation."
  },
  { 
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    price: "$19.99",
    status: "In stock",
    description: "Comfortable and eco-friendly, this organic cotton t-shirt is a perfect addition to your casual wardrobe."
  },
  { 
    name: "Professional Camera Backpack",
    category: "Photography",
    price: "$79.99",
    status: "Out of stock",
    description: "A durable and spacious backpack designed to carry and protect your camera equipment on the go."
  },
  { 
    name: "Stylish Sunglasses",
    category: "Accessories",
    price: "$29.99",
    status: "In stock",
    description: "Stay trendy with these fashionable sunglasses that provide UV protection for your eyes."
  },
  { 
    name: "Smart Fitness Tracker",
    category: "Fitness",
    price: "$89.99",
    status: "Out of stock",
    description: "Monitor your health and fitness goals with this smart tracker, equipped with heart rate and sleep tracking features."
  },
  { 
    name: "Portable Blender",
    category: "Kitchen",
    price: "$34.99",
    status: "In stock",
    description: "Make healthy smoothies on the go with this compact and powerful portable blender."
  }

  ];

  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
          <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Filter and sort function</h1>
          <p className="font-bold text-3xl mb-5">Demo</p>
          <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto">
            <ItemList cards={cards} />
          </div>
      </div>
    </div>

    //bro lu harus rapihin cards -> item
  );
}

export default FilterSort;



