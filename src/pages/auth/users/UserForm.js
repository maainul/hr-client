import axios from "axios";
import { useEffect, useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [message, setMessage] = useState("");
  const [groupList, setGroupList] = useState([]);
  const [groups, setGroups] = useState([]);

  async function saveUser(e) {
    e.preventDefault();
    try {
      const registerData = { name, password, passwordVerify, group: groups };
      await axios.post(
        "http://localhost:1337/api/v1/auth/register",
        registerData
      );
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.error[0].message);
    }
  }

  const handleGroupChange = (e) => {
    const options = e.target.options;
    const selectedGroups = [];
    for (const option of options) {
      if (option.selected) {
        selectedGroups.push(option.value);
      }
    }
    setGroups(selectedGroups);
  };

  useEffect(() => {
    async function getGroupList() {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/v1/auth/group/list"
        );
        setGroupList(res.data.plist);
      } catch (error) {
        console.log(error);
      }
    }
    getGroupList();
  }, []);

  return (
    <>
      <h2>User Form</h2>
      <form onSubmit={saveUser} className="input-group">
        <input
          type="text"
          placeholder="Enter Your User ID"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input-field"
        />
        <p className="errorMessage">{message}</p>
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter Confirm Password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
          className="input-field"
        />
        <select multiple onChange={handleGroupChange} value={groups}>
          <option>--Select Group--</option>
          {groupList.map((group) => (
            <option key={group._id} value={group._id}>
              {group.name}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </>
  );
}

export default UserForm;

// https://www.youtube.com/watch?v=QDBHJsi8TPk&ab_channel=Bluebird
