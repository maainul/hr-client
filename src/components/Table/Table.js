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
    <div class="relative overflow-x-auto sm:rounded-lg  bg-white shadow-lg mt-4 p-4 w-full">
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
            <tr
              key={index}
              class="bg-white border-b   hover:bg-gray-50 "
            >
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
  );
};
