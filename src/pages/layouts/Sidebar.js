import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import LogoutBtn from './../auth/LogoutBtn';
import axios from 'axios';
const Sidebar = () => {

    const { loggedIn, userPermissions } = useContext(AuthContext);
    const [menuList, setMenuList] = useState([])
    const [activeMenuItem, setActiveMenuItem] = useState(null)
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
            const res = await axios.get("http://localhost:1337/api/v1/menu/list")
            setMenuList(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMenuList()
    }, [])

    const handleMenuItemClick = (menuItemId) => {
        setActiveMenuItem(prevMenuItem => (prevMenuItem === menuItemId ? null : menuItemId));
    }

    return (
        <>
            {loggedIn && (
                <div className={`sidebar`}>
                    <Link to="/" className='logo-box'> <i className="bx bxl-xing"></i> <div className="logo-name">BexImCo</div> <span className='hidebar'>X</span></Link>
                    <ul className='sidebar-list'>
                        {Array.isArray(menuList) && menuList.map((ml) => (
                            <li key={ml._id} className={`dropdown ${activeMenuItem === ml._id ? 'active' : ''}`} onClick={() => handleMenuItemClick(ml._id)}>
                                <div className="title">
                                    <div className="link">
                                        <i className="bx bx-plug" />
                                        <span className="name">{ml.menuTitle}</span>
                                    </div>
                                    <i className="bx bxs-chevron-down" />
                                </div>
                                <div className="submenu">
                                    {Array.isArray(ml.submenu) && ml.submenu.map((subItem) => (
                                        <Link to={subItem.url} className='link' key={subItem._id}>{subItem.label}</Link>
                                    ))}
                                </div>
                            </li>

                        ))}
                        <LogoutBtn />
                    </ul>
                </div>
            )}
        </>
    )
}

export default Sidebar
