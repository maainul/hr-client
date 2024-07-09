import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const WithSidebarLayout = () => {
  return (
    <div className="flex gap-x-4">
      <Sidebar />
      <main className="main-dash bg-gray-50 w-full p-4 rounded-xl">
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default WithSidebarLayout;
