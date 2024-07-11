import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "./../auth/LogoutBtn";
import axios from "axios";
const Sidebar = () => {
  const { loggedIn, userPermissions } = useContext(AuthContext);
  const [menuList, setMenuList] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  /*
        const hasPermission = (resource, action) => {
            let hasPermission = false
            for (let permission of userPermissions) {
                if (permission.resource === resource && permission.action === action) {
                    hasPermission = true
                    break
                }
            }
            return hasPermission
        }
    */
  async function getMenuList() {
    try {
      const res = await axios.get("http://localhost:1337/api/v1/menu/list");
      setMenuList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenuList();
  }, []);

  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem((prevMenuItem) =>
      prevMenuItem === menuItemId ? null : menuItemId
    );
  };

  return (
    <>
      {loggedIn && (
        <div className="min-h-screen w-[300px] bg-slate-50 rounded-lg shadow-xl border-r-[2px] border-accent-secondary overflow-y-scroll h-screen">
          {/* logo and Company Header */}
          <div className="flex-shrink-0">
            <div className="logo-and-heading text-accent flex items-center justify-between h-20 bg-cyan-50 rounded-lg px-4">
              <i className="bx bxl-xing text-3xl hover:cursor-pointer hover:text-accent-secondary"></i>
              <div className="logo-name text-accent text-4xl">
                {" "}
                <p className="text-2xl hover:cursor-pointer hover:text-accent-secondary ">
                  Beximco
                </p>
              </div>
              <i class="ri-close-line text-2xl hover:cursor-pointer hover:text-red-400"></i>
            </div>
          </div>
          {/* List */}
          <ul className=" flex flex-col gap-y-2 mt-10 relative">
            {Array.isArray(menuList) &&
              menuList.map((ml) => (
                <li key={ml._id}>
                  <div className="flex items-center gap-x-4 text-sm px-4 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg  hover:rounded-lg">
                    <i class="ri-verified-badge-line"></i>
                    <span className="text-left">{ml.menuTitle}</span>
                    <i class="ri-arrow-down-s-line absolute right-2 "></i>
                  </div>

                  {/* SUBMENU */}
                  <div className="">
                    <ul>
                      {Array.isArray(ml.submenu) &&
                        ml.submenu.map((subItem) => (
                          <Link
                            to={subItem.url}
                            key={subItem._id}
                            className="text-sm px-12 flex flex-col gap-2
                             hover:cursor-pointer hover:bg-accent-tertiary  hover:shadow-md h-8 items-start pt-2"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>

          {/* <div className="bottom-5 absolute left-14">
            <LogoutBtn />
          </div> */}

          <div className="flex-shrink-0 p-4 ml-14">
            <LogoutBtn />
          </div>
        </div>
      )}

      {/* 
       {loggedIn && (
        <div className="min-h-screen w-[240px] bg-gray-900">
          <Link to="/" className="logo-box">
            {" "}
            <i className="bx bxl-xing"></i>{" "}
            <div className="logo-name">BexImCo</div>{" "}
            <span className="hidebar">X</span>
          </Link>
          <ul className="sidebar-list">
            {Array.isArray(menuList) &&
              menuList.map((ml) => (
                <li
                  key={ml._id}
                  className={`dropdown ${
                    activeMenuItem === ml._id ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick(ml._id)}
                >
                  <div className="title">
                    <div className="link">
                      <i className="bx bx-plug" />
                      <span className="name">{ml.menuTitle}</span>
                    </div>
                    <i className="bx bxs-chevron-down" />
                  </div>
                  <div className="submenu">
                    {Array.isArray(ml.submenu) &&
                      ml.submenu.map((subItem) => (
                        <Link
                          to={subItem.url}
                          className="link"
                          key={subItem._id}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                  </div>
                </li>
              ))}
            <LogoutBtn />
          </ul>
        </div>
      )} */}
    </>
  );
};

export default Sidebar;
