
//https://www.youtube.com/watch?v=j0KQh07u3Mk&ab_channel=simplyjs


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
                                {hasPermission('department', 'list') &&
                                    <Link to="/departments" className='link'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Department</span>
                                    </Link>}
                            </div>
                            <div className='submenu'>
                                {hasPermission('unit', 'list') &&
                                    <Link to="/departments" className='link submenu-title'>
                                        <i class='bx bx-home-circle'></i>
                                        <span class="name">Department</span>
                                    </Link>}
                            </div>
                        </li>

                        <LogoutBtn />
                    </ul>


                     {Array.isArray(menuList) && menuList.map((ml) => (

                          ))}