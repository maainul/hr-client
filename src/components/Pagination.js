import React, { useState } from "react";

const Pagination = ({
  totalPage,
  totalData,
  onPageChange,
  upToPageTotalData,
  start,
}) => {
  const [selectedLimit, setSelectedLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <li key={i}>
        <span
          onClick={() => onPageChange(i, selectedLimit)}
          className="flex hover:cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          {i}
        </span>
      </li>
    );
  }

  const handleLimitChange = (event) => {
    const newLimit = Number(event.target.value);
    setSelectedLimit(newLimit);
    onPageChange(1, newLimit); // Reset to first page when changing limit
    setCurrentPage(1); // Reset current page state
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      onPageChange(nextPage, selectedLimit);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      onPageChange(prevPage, selectedLimit);
    }
  };

  return (
    <div className="bg-white shadow flex justify-between p-2">
      <div>
        <select
          className="bg-slate-200 text-sm p-1"
          value={selectedLimit}
          onChange={handleLimitChange}
        >
  
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="all">All</option>
        </select>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li className="hover:cursor-pointer">
            <span
              onClick={handlePrev}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </li>
          {pages}
          <li>
            <span
              onClick={handleNext}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
      <div className="text-xs text-gray-600 px-6 py-3 item-right bg-slate-200">
        {start}-{upToPageTotalData} of {totalData} Data
      </div>
    </div>
  );
};

export default Pagination;
