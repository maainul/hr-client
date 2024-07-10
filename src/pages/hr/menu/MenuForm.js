import axios from "axios";
import { useState } from "react";
import FormHeading from "../../../components/FormHeading";

function MenuForm({ getMenuList }) {
  const [menuTitle, setMenuTitle] = useState();
  const [icon, setIcon] = useState();
  const [label, setLabel] = useState();
  const [url, setUrl] = useState();

  async function saveMenu(e) {
    e.preventDefault();
    try {
      const submenu = [{ icon, label, url }];
      const menuData = { menuTitle, submenu };
      await axios.post("http://localhost:1337/api/v1/menu/create", menuData);
      getMenuList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Menu Form" />
        <form onSubmit={saveMenu}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter menu Name"
              onChange={(e) => setMenuTitle(e.target.value)}
              value={menuTitle}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter menu Icon"
              onChange={(e) => setIcon(e.target.value)}
              value={icon}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter menu Label"
              onChange={(e) => setLabel(e.target.value)}
              value={label}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter menu URL"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              className="input_sm"
            />
            <button type="submit" className="btn_sm_rounded_md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MenuForm;
