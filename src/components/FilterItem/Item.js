// Card.js
import React from 'react';

const Item = ({ name, category, price, status }) => (
  <div className="item p-5 bg-zinc-100 transition-all hover:bg-zinc-200">
    <h3 className='text-lg font-semibold'>{name}</h3>
    <p className='text-sm text-neutral-500'>{category}</p>
    <p className='text-md font-bold mb-2'>{price}</p>
    <span className={`rounded-full p-2 py-1 text-[12px] ${status === "In stock" ? 'bg-green-200 text-green-700' : ' bg-yellow-200 text-yellow-600'}`}>
      {status}
    </span>
  </div>
);

export default Item;
