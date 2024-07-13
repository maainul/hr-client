import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function GroupDetails() {

    const { id } = useParams()
    const [group, setGroup] = useState({
        name: '', code: '', permissions: [],
    })

    const [menus, setMenus] = useState([])


    useEffect(() => {
        async function getSingleGroup() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/group/${id}`)
                setMenus(res.data.getGrp.menus)
                setGroup(res.data.getGrp)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleGroup()
    }, [id])

    return (<>
        <h1>Group Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {group.name}</h2>
        <h2>Code: {group.code}</h2>
        <h3>Backend URL Permissions</h3>
        <hr />
        <br />
        <table border="1">
            <thead>
                <tr>
                    <th>Resource</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {group.permissions.map((permission) => (
                    <tr key={permission._id}>
                        <td>{permission.resource}</td>
                        <td>{permission.action}</td>
                    </tr>
                ))}
            </tbody>
        </table >

        <div>
            {menus.map((menu) => (
                <div key={menu._id}>
                    <h3>{menu.menuTitle}</h3>
                    <ul>
                        {menu.submenu.map((sub) => (
                            <>
                                <li key={sub._id}>LABEL : {sub.label}</li>
                                <li>URL: {sub.url}</li>
                                <li>ICON:{sub.icon}</li>
                            </>
                        ))}
                    </ul>
                </div>
            ))}
        </div>


    </>)
}

export default GroupDetails