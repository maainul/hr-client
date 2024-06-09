import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function GroupUpdate() {

    const { id } = useParams()
    const [name, setName] = useState()
    const [code, setCode] = useState()
    //const [permissions, setPermissions] = useState([])
    //const [availablePermissions, setAvailablePermissions] = useState([])
    const navigate = useNavigate()

    //Fetch Permissions on Component mount
    // useEffect(() => {
    //     async function fetchPermissions() {
    //         try {
    //             const res = await axios.get('http://localhost:1337/api/v1/auth/permission/list')
    //             setAvailablePermissions(res.data.plist)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchPermissions()
    // }, [])


    // handle checkbox change
    // const handlePermissionOnChange = (permissionID) => {
    //     setPermissions(prev => {
    //         if (prev.includes(permissionID)) {
    //             return prev.filter(id => id !== permissionID)
    //         } else {
    //             return [...prev, permissionID]
    //         }
    //     })
    // }

    useEffect(() => {
        async function getSingleGroup() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/group/${id}`)
                console.log("############################")
                console.log(res)
                console.log("############################")
                setCode(res.data.data.code)
                setName(res.data.data.name)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleGroup()
    }, [id])

    async function saveGroup(e) {
        e.preventDefault()
        try {
            const customerData = {}
            await axios.put(`http://localhost:1337/api/v1/group/${id}`, customerData)
            navigate("/groups")
        } catch (error) {
            console.log(error)
        }
    }

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


                {/* Permissions Data */}
                {/* <h2>Select Permissions</h2>
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
                ))} */}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupUpdate