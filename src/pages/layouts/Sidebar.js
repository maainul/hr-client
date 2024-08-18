import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "./../auth/LogoutBtn";
import axios from "axios";
const Sidebar = () => {
  const { loggedIn, userGroup } = useContext(AuthContext);
  const [menuList, setMenuList] = useState([]);
  async function getMenuList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}auth/group/list`,
        { params: { userGroup } }
      );
      const subMenus = res.data.plist[0].subMenus;
      const menuObject = {};
      subMenus.forEach((subItem) => {
        const { menuID } = subItem;
        if (!menuObject[menuID._id]) {
          menuObject[menuID._id] = {
            _id: menuID._id,
            menuTitle: menuID.menuTitle,
            icon: menuID.icon,
            subMenus: [],
          };
        }

        menuObject[menuID._id].subMenus.push({
          _id: subItem._id,
          label: subItem.label,
          url: subItem.url,
          icon: subItem.icon,
        });
      });

      const menuList = Object.values(menuObject);
      setMenuList(menuList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <>
      {loggedIn && (
        <div className=" bg-slate-50 rounded-lg shadow-xl border-r-[2px] border-accent-secondary overflow-y-scroll min-h-screen">
          {/* logo and Company Header */}
          <div className="flex-shrink-0">
            <div className="logo-and-heading text-accent flex items-center justify-between h-20 bg-cyan-50 rounded-lg px-4">
              <Link to={"/"}>
                <i className="bx bxl-xing text-3xl hover:cursor-pointer hover:text-accent-secondary"></i>
              </Link>
              <Link to={"/"}>
                <div className="logo-name text-accent text-4xl">
                  {" "}
                  <p className="text-2xl hover:cursor-pointer hover:text-accent-secondary ">
                    Beximco
                  </p>
                </div>
              </Link>
              <i class="ri-close-line text-2xl hover:cursor-pointer hover:text-red-400"></i>
            </div>
          </div>
          {/* List */}
          <ul className="flex flex-col gap-y-2 mt-10 relative">
            {Array.isArray(menuList) &&
              menuList.map((menuItem) => (
                <li key={menuItem._id}>
                  <div className="flex items-center gap-x-4 text-sm px-4 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg hover:rounded-lg">
                    <i className={menuItem.icon}></i>
                    <span className="text-left">{menuItem.menuTitle}</span>
                    <i className="ri-arrow-down-s-line absolute right-2"></i>
                  </div>

                  {/* SUBMENU */}
                  <div className="">
                    <ul>
                      {Array.isArray(menuItem.subMenus) &&
                        menuItem.subMenus.map((subItem) => (
                          <Link
                            to={subItem.url}
                            key={subItem._id}
                            className="text-sm px-12 flex flex-col gap-2 hover:cursor-pointer hover:bg-accent-tertiary hover:shadow-md h-8 items-start pt-2"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>

          <div className=" bottom-2 absolute left-20">
            <LogoutBtn />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
