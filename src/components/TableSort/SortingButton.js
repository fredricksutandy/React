// components/SortingButton/SortingButton.js

import React from 'react';
import { SortAscending, SortDescending } from '@carbon/icons-react';


const SortingButton = ({ column, sortBy, sortDirection, onClick }) => {
  const isSorted = sortBy === column;
  const arrow = isSorted && sortDirection === 'asc' ? <SortAscending /> : <SortDescending />;

  return (
    <p className="sorting-button flex items-center gap-5" onClick={() => onClick(column)}>
      {column} {isSorted && <span>{arrow}</span>}
    </p>
  );
};

export default SortingButton;
