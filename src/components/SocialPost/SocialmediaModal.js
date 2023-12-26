// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            {children}
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
