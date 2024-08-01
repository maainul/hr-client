import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "./../auth/LogoutBtn";
import axios from "axios";
const Sidebar = () => {
  const { loggedIn } = useContext(AuthContext);
  const [menuList, setMenuList] = useState([]);
  const [userGroup, setUserGroup] = useState("TestNew");
  async function getUserRole() {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/v1/auth/profile/66ab2e74ae956645b0035ec9"
      );

      // Log the entire response to inspect the structure
      console.log("Response Data:", res.data.data.group[0].code);
      // setUserGroup(res.data.data.group[0].name);
      // setUserGroup(res.data.data.group[0].name);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  }

  async function getMenuList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}auth/group/list`,
        { params: { userGroup } }
      );
      console.log(res.data.plist[0].subMenus);
      setMenuList(res.data.plist[0].subMenus);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenuList();
    getUserRole();
  }, []);

  return (
    <>
      {loggedIn && (
        <div className="h-full bg-slate-50 rounded-lg shadow-xl border-r-[2px] border-accent-secondary overflow-y-scroll">
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
          <ul className=" flex flex-col gap-y-2 mt-10 relative">
            {Array.isArray(menuList) &&
              menuList.map((ml) => (
                <li key={ml.menuID}>
                  <div className="flex items-center gap-x-4 text-sm px-4 bg-white text-accent font-semibold h-12 hover:cursor-pointer hover:bg-white hover:shadow-lg  hover:rounded-lg">
                    <i class="ri-verified-badge-line"></i>
                    <span className="text-left">{ml.label}</span>
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

          <div className="flex-shrink-0 p-4 ml-14">
            <LogoutBtn />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
