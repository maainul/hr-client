import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function GroupUpdate() {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [permissions, setPermissions] = useState([])
    const [availablePermissions, setAvailablePermissions] = useState([])

    const navigate = useNavigate()

    // Fetch Permissions on Component mount
    useEffect(() => {
        async function fetchPermissions() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/permission/list`)
                setAvailablePermissions(res.data.plist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPermissions()
    }, [])

    useEffect(() => {
        async function getSingleGroup() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/group/${id}`)

                setCode(res.data.getGrp.code)
                setName(res.data.getGrp.name)
                setPermissions(res.data.getGrp.permissions.map(p => p._id)) // Set existing permissions
            } catch (error) {
                console.log(error)
            }
        }
        getSingleGroup()
    }, [id])

    async function saveGroup(e) {
        e.preventDefault()
        try {
            const groupData = { name, code, permissions } // Include any other necessary data
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}auth/group/${id}`, groupData)
            navigate("/groups")
        } catch (error) {
            console.log(error)
        }
    }

    const handlePermissionChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setPermissions([...permissions, value])
        } else {
            setPermissions(permissions.filter(permission => permission !== value))
        }
    }

    const permittedPermissions = availablePermissions.filter(permission => permissions.includes(permission._id))
    const notPermittedPermissions = availablePermissions.filter(permission => !permissions.includes(permission._id))

    return (
        <>
            <h2>Update Group Form</h2>
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

                <div>
                    <h3>Permitted Permissions</h3>
                    {permittedPermissions.map(permission => (
                        <div key={permission._id}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={permission._id}
                                    checked={permissions.includes(permission._id)} // Pre-check existing permissions
                                    onChange={handlePermissionChange}
                                />
                                {permission.resource} - {permission.action}
                            </label>
                        </div>
                    ))}
                </div>

                <div>
                    <h3>Not Permitted Permissions</h3>
                    {notPermittedPermissions.map(permission => (
                        <div key={permission._id}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={permission._id}
                                    checked={permissions.includes(permission._id)} // Pre-check existing permissions
                                    onChange={handlePermissionChange}
                                />
                                {permission.resource} - {permission.action}
                            </label>
                        </div>
                    ))}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupUpdate
