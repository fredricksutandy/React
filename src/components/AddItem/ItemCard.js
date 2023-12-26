// src/components/ItemCard.js
import React from 'react';

function ItemCard({ item, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(item); // Pass the item to be deleted to the parent component
  };

  return (
    <div className="item-card p-3 max-w-[300px] w-full min-w-[200px] bg-white shadow-sm">
      <p className='font-bold text-xl text-blue-600'>${item.price}</p>
      <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
      <p className='rounded-lg text-blue-800 border-blue-800 px-4 py-1 w-fit bg-blue-100 text-xs mb-3'>{item.category}</p>
      <p className='text-gray-500'>{item.description}</p>
      <button className='text-red-400 mt-3' onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default ItemCard;

