import axios from "axios"
import { useEffect, useState } from "react"


function GroupForm({ getGroupList }) {

    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [permissions, setPermissions] = useState([])
    const [availablePermissions, setAvailablePermissions] = useState([])


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

    async function saveGroup(e) {
        e.preventDefault()
        try {
            const groupData = { name, code, permissions }
            await axios.post('http://localhost:1337/api/v1/auth/group/create', groupData)
            getGroupList()
            setCode('')
            setName('')
            setPermissions([])
        } catch (error) {
            console.log(error)
        }
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

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupForm