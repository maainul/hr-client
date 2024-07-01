import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function GroupForm({ getGroupList }) {

    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [permissions, setPermissions] = useState([])
    const [availablePermissions, setAvailablePermissions] = useState([])
    const [menus, setMenus] = useState([])
    const [selectedMenus, setSelectedMenus] = useState([])


    //Fetch Permissions on Component mount
    useEffect(() => {
        async function fetchPermissions() {
            try {
                const res = await axios.get('http://localhost:1337/api/v1/auth/permission/list')
                setAvailablePermissions(res.data.plist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPermissions()
    }, [])

    useEffect(() => {
        async function getMenuList() {
            try {
                const res = await axios.get("http://localhost:1337/api/v1/menu/list")
                setMenus(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMenuList()
    }, [])

    // handle checkbox change
    const handlePermissionOnChange = (permissionID) => {
        setPermissions(prev => {
            if (prev.includes(permissionID)) {
                return prev.filter(id => id !== permissionID)
            } else {
                return [...prev, permissionID]
            }
        })
    }

    // handle checkbox change for menus
    const handleMenuOnChange = (menuID) => {
        setSelectedMenus(prev => {
            if (prev.includes(menuID)) {
                return prev.filter(id => id !== menuID)
            } else {
                return [...prev, menuID]
            }
        })
    }
    // handle checkbox change for submenus
    const handleSubmenuOnChange = (submenuID) => {
        setSelectedMenus(prev => {
            if (prev.includes(submenuID)) {
                return prev.filter(id => id !== submenuID)
            } else {
                return [...prev, submenuID]
            }
        })
    }
    async function saveGroup(e) {
        e.preventDefault()
        try {
            const groupData = { name, code, permissions }
            await axios.post('http://localhost:1337/api/v1/auth/group/create', groupData)
            getGroupList()
            setCode('')
            setName('')
            setPermissions([])
            setSelectedMenus([])
        } catch (error) {
            console.log(error)
        }
    }

    function renderSubmenus(submenus) {
        return submenus.map((submenu, index) => (
            <div key={index}>
                <label>
                    <input
                        type="checkbox"
                        value={submenu._id}
                        checked={selectedMenus.includes(submenu._id)}
                        onChange={() => handleSubmenuOnChange(submenu._id)}
                    />
                    {submenu.label} - {submenu.url}
                </label>
            </div>
        ));
    }



    return (
        <>
            <h2>Group Form</h2>
            <form onSubmit={saveGroup}>
                <input type="text"
                    placeholder="Enter group Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter group Code"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                />
                <div className="group-flex">

                    <div>


                        {/* Permissions Data */}
                        <h2>Select Permissions</h2>
                        {availablePermissions.map(permission => (
                            <div key={permission._id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={permission._id}
                                        checked={permissions.includes(permission._id)}
                                        onChange={() => handlePermissionOnChange(permission._id)}
                                    />
                                    {permission.resource} - {permission.action}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2>Select Menus</h2>
                        {menus.map(menu => (
                            <div key={menu._id}>
                                <h3>{menu.menuTitle}</h3>
                                {renderSubmenus(menu.submenu)}
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupForm