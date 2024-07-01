import { Link } from "react-router-dom";

function UserList({ users }) {
  function renderGroup(groups) {
    return groups.map((group, index) => <div>{group}</div>);
  }

  function renderUsers() {
    return users.map((usr, i) => {
      return (
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
      );
    });
  }

  return (
    <>
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
    </>
  );
}

export default UserList;
