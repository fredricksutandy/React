// src/components/ItemCard.js
import React from 'react';

function ItemCard({ item, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(item); // Pass the item to be deleted to the parent component
  };

  return (
    <div className="item-card max-w-[300px] w-full min-w-[200px] bg-white shadow-sm">
      <p className='p-3 text-blue-800 w-fit bg-blue-100 text-xs w-full'>{item.category}</p>
      <div className="p-3">
        <h3 className="text-xl font-semibold mb-2 capitalize">{item.title}</h3>
        <p className='text-gray-500 mb text-sm mb-4'>{item.description}</p>
        <p className='font-bold text-3xl'>${item.price}</p>
        <button className='text-red-400 mt-3' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default ItemCard;

