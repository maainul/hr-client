import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const WithSidebarLayout = () => {
  return (
    <div className="flex gap-x-4">
      <div className="w-2/12 h-full">
        <Sidebar />
      </div>
      <main className="main-dash bg-gray-50  w-10/12 p-4 rounded-xl">
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default WithSidebarLayout;
