import React, { useContext } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import LogoutBtn from './../auth/LogoutBtn';
const Sidebar = () => {

    const { loggedIn, userPermissions } = useContext(AuthContext);
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



    return (
        <>
            {loggedIn && (
                <div className='sidebar'>
                    <Link to="/" className='logo-box'> <i class="bx bxl-xing"></i> <div class="logo-name">BexImCo</div></Link>

                    <ul className='sidebar-list'>
                        <li>
                            <div className='title'>
                                {hasPermission('employee', 'list') &&
                                    <Link to="/employee" className='link'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Employee</span>
                                    </Link>}
                            </div>
                            <div className='submenu'>
                                {hasPermission('employee', 'list') &&
                                    <Link to="/employee" className='link submenu-title'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Employee</span>
                                    </Link>}
                            </div>
                        </li>

                        <li>
                            <div className='title'>
                                {hasPermission('unit', 'list') &&
                                    <Link to="/units" className='link'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Unit</span>
                                    </Link>}
                            </div>
                            <div className='submenu'>
                                {hasPermission('unit', 'list') &&
                                    <Link to="/units" className='link submenu-title'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Unit</span>
                                    </Link>}
                            </div>
                        </li>

                        <li>
                            <div className='title'>
                                {hasPermission('department', 'list') &&
                                    <Link to="/department" className='link'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Department</span>
                                    </Link>}
                            </div>
                            <div className='submenu'>
                                {hasPermission('unit', 'list') &&
                                    <Link to="/department" className='link submenu-title'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Department</span>
                                    </Link>}
                            </div>
                        </li>

                        <LogoutBtn />
                    </ul>
                </div>
            )}
        </>
    )
}

export default Sidebar
