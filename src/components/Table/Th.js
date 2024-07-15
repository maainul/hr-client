import React from "react";
import TableSearch from "../TableSearch";

const Th = ({ title, setSearch }) => {
  return (
    <th scope="col" className="px-6 py-3 border">
      <div className="flex flex-col ">
        <div className="flex justify-start">
          <span className="mb-2">{title}</span>
          <a href="#">
            <svg
              className="w-3 h-3 ms-1.5 hover:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
            </svg>
          </a>
        </div>
        <TableSearch field={title} setSearch={setSearch} /> {/* Pass setSearch to TableSearch */}
      </div>
    </th>
  );
};

export default Th;
