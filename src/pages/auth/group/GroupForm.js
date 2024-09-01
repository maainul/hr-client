import axios from "axios";
import { useEffect, useState } from "react";
import FormHeading from "../../../components/FormHeading";

function GroupForm({ getGroupList }) {
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [permissions, setPermissions] = useState([]);
  const [availablePermissions, setAvailablePermissions] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedMenus, setSelectedMenus] = useState([]);

  useEffect(() => {
    async function getMenuList() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}menu/list`
        );
        setMenus(res.data.data);
      } catch (error) {
        console.log("Error fetching menu list:", error);
      }
    }
    getMenuList();
  }, []);

  // handle checkbox change
  const handlePermissionOnChange = (permissionID) => {
    setPermissions((prev) => {
      if (prev.includes(permissionID)) {
        return prev.filter((id) => id !== permissionID);
      } else {
        return [...prev, permissionID];
      }
    });
  };


  async function saveGroup(e) {
    e.preventDefault();
    try {
      const groupData = { name, code, permissions, menus: selectedMenus };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}auth/group/create`,
        groupData
      );
      getGroupList();
      setCode("");
      setName("");
      setPermissions([]);
      setSelectedMenus([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Group Form" />
        <form onSubmit={saveGroup}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter group Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter group Code"
              onChange={(e) => setCode(e.target.value)}
              value={code}
              className="input_sm"
            />
          </div>

          <div
            className="flex justify-center
          mt-10"
          >
            <button type="submit" className="btn_sm_rounded_md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GroupForm;
