// components/Table/Table.js

import React, { Component } from 'react';
import SortingButton from './SortingButton';

class Table extends Component {
  state = {
    data: [
      { id: 1, Name: 'John', Age: 30, Balance: 50000 },
      { id: 2, Name: 'Alice', Age: 25, Balance: 75000 },
      { id: 3, Name: 'Bob', Age: 35, Balance: 60000 },
      { id: 4, Name: 'Eva', Age: 28, Balance: 40000 },
      { id: 5, Name: 'Michael', Age: 40, Balance: 90000 },
      { id: 6, Name: 'Sara', Age: 22, Balance: 30000 },
      { id: 7, Name: 'David', Age: 32, Balance: 80000 },
      { id: 8, Name: 'Emily', Age: 27, Balance: 55000 },
    ],
    sortBy: null,
    sortDirection: 'asc',
  };

  handleSort = (column) => {
    const { data, sortDirection, sortBy } = this.state;
    const newSortDirection = sortBy === column && sortDirection === 'asc' ? 'desc' : 'asc';
  
    let sortedData;
  
    if (column === 'Name') {
      sortedData = data.slice().sort((a, b) => {
        if (newSortDirection === 'asc') {
          return a[column].localeCompare(b[column]);
        } else {
          return b[column].localeCompare(a[column]);
        }
      });
    } else if (column === 'Age' || column === 'Balance') {
      sortedData = data.slice().sort((a, b) => {
        if (newSortDirection === 'asc') {
          return a[column] - b[column];
        } else {
          return b[column] - a[column];
        }
      });
    }
  
    this.setState({
      data: sortedData,
      sortBy: column,
      sortDirection: newSortDirection,
    });
  };
  

  render() {
    const { data, sortBy, sortDirection } = this.state;

    return (
      <div className='bg-zinc-100'>
        <p className="text-lg mb-0 py-3 px-5 pb-0">Demo</p>
        <p className="text-sm mb-5 py-3 px-5 py-1">Demo</p>
        <table className='w-full'>
          <thead className="w-1/2 bg-zinc-300">
            <tr>
              <th className='px-5 py-3 text-left text-sm w-1/3 cursor-pointer'>
                <SortingButton
                  column="Name"
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                  onClick={this.handleSort}
                />
              </th>
              <th className='px-5 py-3 text-left text-sm w-1/3 cursor-pointer'>
                <SortingButton
                  column="Age"
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                  onClick={this.handleSort}
                />
              </th>
              <th className='px-5 py-3 text-left text-sm w-1/3 cursor-pointer'>
                <SortingButton
                  column="Balance"
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                  onClick={this.handleSort}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr className="bg-gray-100" key={row.id}>
                <td className="px-5 py-3 text-left text-sm">{row.Name}</td>
                <td className="px-5 py-3 text-left text-sm">{row.Age}</td>
                <td className="px-5 py-3 text-left text-sm">${row.Balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
