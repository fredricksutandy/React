import React, { useState } from 'react';
import Table from '../components/TableSort/TableSort';

function FilterSort() {
 
  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
          <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Filter and sort function</h1>
          <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto">
            <Table />
          </div>
      </div>
    </div>
  );
}

export default FilterSort;
