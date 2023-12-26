// src/App.js
import React, { useState } from 'react';
import AddItemForm from '../components/AddItem/AddItemForm.js';
import ItemCard from '../components/AddItem/ItemCard.js';

function AdditemPage() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item !== itemToDelete);
    setItems(updatedItems);
  };

  return (
    <div className='w-full mt-14 sm:ml-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Add Item</h1>
        <AddItemForm addItem={addItem} />
        <h2 className="text-3xl font-bold text-black w-fit sm:text-3xl mb-8 w-auto">Items</h2>
        {items.length === 0 ? (
        <p className="text-gray-500 ml-5">No items</p>
        ) : (
          <div className="item-list flex gap-3 flex-wrap">
            {items.map((item, index) => (
              <ItemCard key={index} item={item} onDelete={deleteItem} />
            ))}
          </div>
        )}
      </div>
      <a className='p-8 w-full block bg-slate-200 hover:bg-slate-300 text-right' href='#'>About me</a>
      <a className='p-8 w-full block bg-slate-300 hover:bg-slate-400 text-right' href='#'>Streamline</a>
    </div>
  );
}

export default AdditemPage;
