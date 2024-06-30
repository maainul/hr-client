import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";


function Users() {
  const [users, setUsers] = useState([]);

  async function getUserList() {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/v1/auth/user/list"
      );
      setUsers(res.data.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
}

export default Users;
