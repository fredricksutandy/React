import React, { useState } from 'react';
import Tabbing from '../components/Tabbing';

function Tabbingpage() {
 
  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
          <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Modal</h1>
          <div>
            <Tabbing />
          </div>
      </div>
    </div>
  );
}

export default Tabbingpage;
