import { Link } from "react-router-dom";

function UserList({ users }) {
  function renderGroup(groups) {
    return groups.map((group, index) => <div>{group}</div>);
  }

  function renderUsers() {
    return users.map((usr, i) => {
      return (
        <>
          <tr key={i}>
            <td>{usr.name}</td>
            <td>{usr.password}</td>
            <td>{renderGroup(usr.group)}</td>
            <td>
              <Link to={`/auth/user/${usr._id}`}>View</Link>
            </td>
            <td>
              <Link to={`/auth/user/update/${usr._id}`}>Edit</Link>
            </td>
            <td>
              <Link to={`/auth/user/update/status/${usr._id}`}>
                Update Status
              </Link>
            </td>
            <td>
              <Link to={`/auth/user/update/${usr._id}`}>Add Menu</Link>
            </td>
          </tr>
        </>
      );
    });
  }

  return (
    <>
     <div>
        <h2>User List</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div> 

      {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg  bg-blue-50 p-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border border-l-2 border-r-2">
            <tr>
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3 border">
                <div className="flex flex-col ">
                  <div className="flex justify-start">
                    <span className=" mb-2">Product name</span>
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
                  <TableSearch field="name" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3 border">
                <div className="flex flex-col ">
                  <div className="flex justify-start">
                    <span className=" mb-2">Color</span>
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
                  <TableSearch field="name" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3 border">
                <div className="flex flex-col">
                  <span className="mb-2">Category</span>
                  <TableSearch field="category" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3 border">
                <div className="flex flex-col">
                  <span className="mb-2">Price</span>
                  <TableSearch field="price" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4 border">
                <TableCheckBox />
              </td>
              <th
                scope="row"
                class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-2 border">Silver</td>
              <td class="px-6 py-2 border">Laptop</td>
              <td class="px-6 py-2 border">$2999</td>
              <td class="px-6 py-2 border">
                <div className="flex gap-x-2">
                  <EditIcon />
                  <DeleteIcon />
                  <ViewIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default UserList;
