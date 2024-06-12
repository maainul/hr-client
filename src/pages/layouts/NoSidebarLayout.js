import React from 'react';
import { Outlet } from 'react-router-dom';

const NoSidebarLayout = () => {
    return (
        <div className="no-sidebar-layout">
            <Outlet />
        </div>
    );
};

export default NoSidebarLayout;
