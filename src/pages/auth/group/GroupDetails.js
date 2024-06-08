import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function GroupDetails() {

    const { id } = useParams()
    const [group, setGroup] = useState({
        name: '', code: '', permissions: []
    })

    useEffect(() => {
        async function getSingleGroup() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/auth/group/${id}`)
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

    </>)
}

export default GroupDetails