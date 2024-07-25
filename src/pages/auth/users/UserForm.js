import axios from "axios";
import { useEffect, useState } from "react";
import FormHeading from "../../../components/FormHeading";

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
        `${process.env.REACT_APP_BACKEND_URL}auth/register`,
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
          `${process.env.REACT_APP_BACKEND_URL}auth/group/list`
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
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="User Form" />
        <form onSubmit={saveUser} className="input-group">
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter Your User ID"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <p className="errorMessage">{message}</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input_sm"
            />
            <input
              type="password"
              placeholder="Enter Confirm Password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
              className="input_sm"
            />
            <div className="w-50">
              <select multiple onChange={handleGroupChange} value={groups}>
                <option>--Select Group--</option>
                {groupList.map((group) => (
                  <option key={group._id} value={group._id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn_sm_rounded_md">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserForm;

// https://www.youtube.com/watch?v=QDBHJsi8TPk&ab_channel=Bluebird
