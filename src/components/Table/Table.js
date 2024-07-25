import React from "react";
import Th from "./Th";
import EditIcon from "../../components/Icon/EditIcon";
import DeleteIcon from "../../components/Icon/DeleteIcon";
import ViewIcon from "../../components/Icon/ViewIcon";
import Action from "./Action";
import TableCheckBoxTD from "./TableCheckBoxTD";
import TD from "./TD";
import Pagination from "../Pagination";

export const Table = ({
  columns,
  data,
  paginationConstant,
  setPage,
  setLimit,
  setSearch, // Receive setSearch as prop
}) => {
  const {
    currentPageData,
    totalData,
    totalNumberOfPages,
    upToPageTotalData,
    start
  } = paginationConstant;

  return (
    <>
      <div className="relative overflow-x-auto mt-4 w-full">
        <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border border-l-2 border-r-2">
            <tr>
              <th scope="col" className="p-4"></th>
              {columns.map((col) => (
                <Th key={col.field} title={col.title} setSearch={setSearch} /> // Pass setSearch to Th
              ))}
              <Action />
            </tr>
          </thead>
          <tbody>
            {data.length >= 1 && (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
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
              ))
            )
            }
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPageData}
        totalPage={totalNumberOfPages}
        onPageChange={setPage}
        totalData={totalData}
        upToPageTotalData={upToPageTotalData}
        start={start}
      />
    </>
  );
};
