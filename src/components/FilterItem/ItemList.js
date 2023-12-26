// CardList.js
import React, { useState } from 'react';
import Card from './Item';
import { Thumbnail_2, List, Search } from '@carbon/icons-react';

const ItemList = ({ cards }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('table');

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'table' ? 'grid' : 'table'));
  };

  const filteredCards = cards.filter((card) => {
    // Filter by name
    const nameMatch = card.name.toLowerCase().includes(search.toLowerCase());
    // Filter by category
    const categoryMatch =
      selectedCategory === 'All' || card.category === selectedCategory;
    return nameMatch && categoryMatch;
  });

  return (
    <div className='bg-zinc-100'>
      <p className="text-lg mb-0 py-3 px-5 pb-0">Demo</p>
      <p className="text-sm mb-5 py-3 px-5 py-1">Demo</p>
      <div className='flex w-100 bg-zinc-50'>
      <div className="relative w-[100%]">
        <input
          type="text"
          className='py-3 w-[100%] px-5 pl-12 text-sm bg-zinc-50 transition-all duration-200 hover:bg-zinc-200 border-2 border-transparent focus:border-blue-500 focus:border-2 outline-none'
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" /> {/* Adjust the styling based on your icon component */}
      </div>

        <select
          className='w-[160px] px-5 text-sm bg-zinc-50 transition-all duration-200 hover:bg-zinc-200 rounded-0'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All"  className='hover:bg-white bg-white'>All Categories</option>
          {Array.from(new Set(cards.map((card) => card.category)).values()).map(
            (category) => (
              <option key={category} value={category} className='hover:bg-white bg-white'>
                {category}
              </option>
            )
          )}
        </select>
        <button 
          onClick={toggleViewMode}
          className='w-[80px] flex items-center justify-center transition-all duration-200 hover:bg-zinc-200'
        >
          {viewMode === 'table' ? <Thumbnail_2 size={22} /> : <List size={22} />}
        </button>
      </div>
      <div className={viewMode === 'table' ? 'card-list-table' : 'card-list-grid'}>
        {viewMode === 'table' ? (
          <table className="table-auto w-full">
            <thead className="bg-zinc-300">
              <tr>
                <th className="px-5 py-3 text-left text-sm">Name</th>
                <th className="px-5 py-3 text-left text-sm">Category</th>
                <th className="px-5 py-3 text-left text-sm">Price</th>
                <th className="px-5 py-3 text-left text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {filteredCards.map((card, index) => (
                <tr key={index} className='text-sm border-b'>
                  <td className="px-5 py-3">{card.name}</td>
                  <td className="px-5 py-3">{card.category}</td>
                  <td className="px-5 py-3">{card.price}</td>
                  <td className={`px-5 py-3`}><span className={`rounded-full p-2 py-1 text-[12px] ${card.status === "In stock" ? 'bg-green-200 text-green-700' : ' bg-yellow-200 text-yellow-600'}`}>
      {card.status}
    </span></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid grid-cols-3">
            {filteredCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
