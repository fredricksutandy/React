import React, { useState, useRef, useEffect } from 'react';

const Dropdownhover = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md focus:outline-none focus:ring focus:border-blue-300 transition"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdownhover;
