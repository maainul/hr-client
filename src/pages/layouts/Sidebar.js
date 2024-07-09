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
        <div className="min-h-screen w-[250px] bg-slate-50 rounded-lg shadow-xl border-r-[2px] border-accent-secondary">
          {/* logo and Company Header */}
          <div className="">
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
          <ul className=" flex flex-col gap-y-2 mt-10">
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
            <li className="flex items-center gap-x-4 text-md px-8 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg justify-between hover:rounded-lg">
              <i class="ri-verified-badge-line"></i>
              <span>Divison</span>
              <i class="ri-arrow-down-s-line"></i>
            </li>
          </ul>
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
