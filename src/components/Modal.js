import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="modal-overlay absolute w-full h-full bg-zinc-900 opacity-75 z-50" onClick={onClose}></div>
      <div className="modal-content bg-white shadow-md z-50 max-w-[500px] w-full">
        <div className="p-4">
        <h2 className="text-3xl font-bold mb-2">Add New Item</h2>
        <p className="mb-5 text-gray-600">Please provide details for the new item. Make sure to enter accurate information for better organization and tracking.</p>
        
        <label className="block mb-5 text-md text-gray-600">
          Item Name:
          <input type="text" className="w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm" placeholder="Enter item name" />
        </label>
        
        <label className="block mb-5 text-md text-gray-600">
          Description:
          <textarea className="w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm" placeholder="Enter item description" />
        </label>

        <label className="block mb-5 text-md text-gray-600">
          Price:
          <input type="text" className="w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm" placeholder="Enter price" />
        </label>

        <label className="block mb-5 text-md text-gray-600">
          Category:
          <select className="w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        </div>
        <div className="modal-buttons mt-2 flex">
          <button onClick={onClose} className="text-left px-4 py-3 flex h-[65px] w-1/2 bg-zinc-300 hover:bg-zinc-400">Cancel</button>
          <button onClick={onClose} className="text-left px-4 py-3 flex h-[65px] w-1/2 bg-blue-600 text-white hover:bg-blue-700">Add +</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-600">Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;

