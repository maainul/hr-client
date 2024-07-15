import React, { useState } from 'react';
import { useDebounce } from '../utils/debounce.js'; // Adjust path as needed

const TableSearch = ({ field, setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearch = useDebounce(setSearch, 300); // Adjust debounce delay as needed

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    debounceSearch(value);
  };

  return (
    <div className="relative">
      <i className="ri-search-2-line text-lg absolute left-1 top-[2px] text-gray-400"></i>
      <input
        placeholder={`Search ${field}`}
        id="table-search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="text-sm w-44 h-8 px-6 outline-none border border-gray-300 rounded-sm focus:border-accent font-normal"
      />
    </div>
  );
};

export default TableSearch;
