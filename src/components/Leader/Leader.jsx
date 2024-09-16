import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import './Leader.css';

const Leader = () => {
  // Generate 100 users dynamically with random planted values
  const data = useMemo(
    () => Array.from({ length: 100 }, (v, i) => ({
      rank: i + 1, // Rank starts from 1
      userName: `User ${i + 1}`, // User name as "User 1", "User 2", etc.
      planted: Math.floor(Math.random() * 100) + 1, // Random number of plants (1 to 100)
    })),
    []
  );

  // Define columns for the table
  const columns = useMemo(
    () => [
      { Header: 'Rank', accessor: 'rank' }, // Rank column
      { Header: 'User Name', accessor: 'userName' }, // User Name column
      { Header: 'No. of Plants', accessor: 'planted' }, // Number of plants column
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 20;

  // Calculate the data to display for the current page
  const paginatedData = useMemo(() => {
    const start = currentPage * pageSize;
    return data.slice(start, start + pageSize);
  }, [currentPage, data]);

  // Use the useTable hook with paginated data
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: paginatedData });

  // Handle next and previous page buttons
  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className='leaderboa'>Leaderboard</h1>
      <table {...getTableProps()} className="leaderboard-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Back
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * pageSize >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leader;
