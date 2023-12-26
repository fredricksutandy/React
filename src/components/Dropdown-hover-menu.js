import React, { useState } from 'react';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const openMenu = (menuIndex) => {
    setActiveMenu(menuIndex);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const categories = [
    {
      buttonName: 'Home',
      subcategories: ['Furniture', 'Decor', 'Bed & Bath'],
    },
    {
      buttonName: 'Electronics',
      subcategories: ['Smartphones', 'Laptops', 'Accessories'],
    },
    {
      buttonName: 'Fashion',
      subcategories: ["Men's Clothing", "Women's Clothing", 'Accessories'],
    },
    {
      buttonName: 'Sports & Outdoors',
      subcategories: ['Exercise', 'Outdoor Gear'],
    },
  ];

  return (
    <div className="relative inline-block text-left w-full" onMouseLeave={closeMenu}>
      {categories.map((category, index) => (
        <div key={index} className="inline-block">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:outline-none focus:ring focus:border-blue-300 transition"
            onMouseEnter={() => openMenu(index)}
            aria-expanded={activeMenu === index}
            aria-haspopup="true"
          >
            {category.buttonName}
          </button>

          {activeMenu === index && (
            <div className="absolute left-0 w-full bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex p-4">
                <div className="flex-1">
                  <ul className="list-none">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
