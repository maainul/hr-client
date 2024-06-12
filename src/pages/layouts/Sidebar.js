import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <Link to="/" className='logo-box'> <i class="bx bxl-xing"></i> <div class="logo-name">BexImCo</div></Link>

                <ul className='sidebar-list'>
                    <li>
                        <div className='title'>
                            <Link to="/" className='link'>
                                <i class='bx bx-home-circle'></i>
                                <span class="name">Dashboard</span>
                            </Link>
                        </div>
                        <div className='submenu'>
                            <Link to="/" className='link submenu-title'>Dashboard</Link>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <div className='title'>
                            <Link to="/" className='link'>
                                <i class='bx bx-category'></i>
                                <span class="name">Category</span>
                            </Link>
                            <i class="bx bxs-chevron-down"></i>
                        </div>
                        <div className='submenu'>
                            <Link to="/" className='link submenu-title'>Category</Link>
                            <Link to="/" className='link'>HTML</Link>
                            <Link to="/" className='link'>CSS</Link>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <section class="home">
                <div class="toggle-sidebar">
                    <i class='bx bx-menu'></i>
                    <div class="text">Toggle</div>
                </div>
            </section> */}
        </>
    )
}

export default Sidebar
