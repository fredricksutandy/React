// src/components/AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object with the input values
    const newItem = {
      title,
      description,
      price,
      category,
    };

    // Pass the new item to the parent component
    addItem(newItem);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white shadow-sm mb-10 w-full flex flex-col gap-5 max-w-lg'>
      <div className='p-4'>
        <p className='text-md text-gray-600'>Title:</p>
        <input
          className='w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      
        <p className='text-md text-gray-600'>Description:</p>
        <input
          className='w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm'
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      
        <p className='text-md text-gray-600'>Price:</p>
        <input
          className='w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm pr-2'
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      
        <p className='text-md text-gray-600'>Category:</p>
        <input
          className='w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm'
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='text-left px-4 py-3 flex h-[65px] bg-blue-600 text-white hover:bg-blue-700'>Add Item +</button>
    </form>
  );
}

export default AddItemForm;
