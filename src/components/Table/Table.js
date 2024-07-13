import React from "react";
import Th from "./Th";
import EditIcon from "../../components/Icon/EditIcon";
import DeleteIcon from "../../components/Icon/DeleteIcon";
import ViewIcon from "../../components/Icon/ViewIcon";
import Action from "./Action";

import TableCheckBoxTD from "./TableCheckBoxTD";
import TD from "./TD";
export const Table = ({ columns, data }) => {
  return (
    <>
      <div class="relative overflow-x-auto  bg-white shadow-lg mt-4 p-4 w-full">
        <table class="text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100  border border-l-2 border-r-2">
            <tr>
              <th scope="col" class="p-4"></th>
              {columns.map((col) => (
                <Th title={col.title} />
              ))}
              <Action />
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} class="bg-white border-b   hover:bg-gray-50 ">
                <TableCheckBoxTD />
                {columns.map((col) => (
                  <TD key={col.field} data={item[col.field]} />
                ))}
                <td className="px-6 py-1 border">
                  <div className="flex gap-x-2">
                    <EditIcon />
                    <DeleteIcon />
                    <ViewIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginaiton */}
      <div className="bg-white shadow-lg flex justify-center p-2">
        <nav aria-label="Page navigation example">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  hover:bg-gray-100 hover:text-gray-700 "
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 "
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
