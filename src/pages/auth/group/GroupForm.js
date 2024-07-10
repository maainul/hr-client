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

  //Fetch Permissions on Component mount
  useEffect(() => {
    async function fetchPermissions() {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/v1/auth/permission/list"
        );
        setAvailablePermissions(res.data.plist);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPermissions();
  }, []);

  useEffect(() => {
    async function getMenuList() {
      try {
        const res = await axios.get("http://localhost:1337/api/v1/menu/list");
        setMenus(res.data.data);
      } catch (error) {
        console.log(error);
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

  // handle checkbox change for menus
  const handleMenuOnChange = (menuID) => {
    setSelectedMenus((prev) => {
      if (prev.includes(menuID)) {
        return prev.filter((id) => id !== menuID);
      } else {
        return [...prev, menuID];
      }
    });
  };
  // handle checkbox change for submenus
  const handleSubmenuOnChange = (submenuID) => {
    setSelectedMenus((prev) => {
      if (prev.includes(submenuID)) {
        return prev.filter((id) => id !== submenuID);
      } else {
        return [...prev, submenuID];
      }
    });
  };
  async function saveGroup(e) {
    e.preventDefault();
    try {
      const groupData = { name, code, permissions, menus: selectedMenus };
      await axios.post(
        "http://localhost:1337/api/v1/auth/group/create",
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

  function renderSubmenus(submenus) {
    return submenus.map((submenu, index) => (
      <div
        key={index}
        className="bg-gray-200 p-2 mt-2 m-2 rounded-lg hover:bg-accent-secondary"
      >
        <label className="flex gap-4">
          <input
            type="checkbox"
            value={submenu._id}
            checked={selectedMenus.includes(submenu._id)}
            onChange={() => handleSubmenuOnChange(submenu._id)}
          />
          <div className="flex flex-col">
            <span>Title : {submenu.label}</span>
            <span>Url : {submenu.url}</span>
          </div>
        </label>
      </div>
    ));
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

          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-around mt-10">
            <div className="flex-1 bg-green-50 rounded-lg p-4">
              {/* Permissions Data */}
              <h2 className="bg-accent h-10 pt-2 px-4 rounded-md mb-4">
                Select Permissions
              </h2>

              {availablePermissions.map((permission) => (
                <>
                  <div key={permission._id} className="hover:cursor-pointer">
                    <label className=" flex flex-row gap-x-4 hover:cursor-pointer">
                      <input
                        type="checkbox"
                        value={permission._id}
                        checked={permissions.includes(permission._id)}
                        onChange={() =>
                          handlePermissionOnChange(permission._id)
                        }
                      />
                      <div className="mb-1 mt-1 hover:cursor-pointer">
                        {permission.resource} - {permission.action}
                      </div>
                    </label>
                  </div>
                  <div className="bg-accent h-[1px]"></div>
                </>
              ))}
            </div>

            <div className="bg-purple-50 text-sm p-4 rounded-lg flex-1">
              <h2 className="bg-accent h-10 pt-2 px-4 rounded-md mb-4">
                Select Menus
              </h2>
              <div>
                {menus.map((menu) => (
                  <div key={menu._id}>
                    <span className="text-accent font-semibold ">
                      {menu.menuTitle}
                    </span>
                    {renderSubmenus(menu.submenu)}
                  </div>
                ))}
              </div>
            </div>
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
