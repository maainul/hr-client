import DeleteIcon from "../../../components/Icon/DeleteIcon";
import EditIcon from "../../../components/Icon/EditIcon";
import ViewIcon from "../../../components/Icon/ViewIcon";

function DepartmentList({
  data,
  onLimitChange,
  numberOfPages,
  pageDataCount,
  startPageData,
  totalDataCount,
  upToPageTotalData,
  onChangeStatus,
}) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Code
              </th>
              <th scope="col" className="px-6 py-3">
                Status
                <select onChange={onChangeStatus}>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </select>
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item._id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.dptCode}</td>
                  <td
                    className={`px-6 py-4 ${
                      item.status === 1
                        ? "bg-green-100 text-green-800 font-semibold"
                        : "bg-red-100 text-red-800 font-semibold"
                    }`}
                  >
                    {item.status === 1 ? "Active" : "Inactive"}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(item.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td>
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
        <div className="bg-green-200 w-full">
          <div className="flex justify-between">
            <div className="">
              <select
                className="text-sm p-1 bg-transparent text-gray-600"
                onChange={onLimitChange}
              >
                <option value="10">10</option>
                <option value="5">5</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="all">All</option>
              </select>
            </div>

            <div className="text-xs text-gray-600 px-6 py-3 item-right">
              Number Of Pages : {numberOfPages} Current Page Data :
              {pageDataCount} {startPageData}-{upToPageTotalData} of{" "}
              {totalDataCount} Data
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentList;
