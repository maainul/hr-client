import React from "react";

const TableSearch = ({ field }) => {
  return (
    <>
      <div className="relative">
        <i class="ri-search-2-line text-lg absolute left-1 top-[2px] text-gray-400"></i>
        <input
          placeholder={`Search ${field}`}
          id="table-search"
          type="text"
          className="text-sm w-44 h-8 px-6 outline-none border border-gray-300 rounded-sm focus:border-accent font-normal"
        />
      </div>
    </>
  );
};

export default TableSearch;
