import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const WithSidebarLayout = () => {
    return (
        <div className="main-layout">
            <Sidebar />
            <main className="main-dash">
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default WithSidebarLayout;
