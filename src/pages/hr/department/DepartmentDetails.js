import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function DepartmentDetails({ departments }) {

    const [department, setDepartment] = useState({})
    const { id } = useParams()

    async function getSingleDepartment() {
        try {
            const res = await axios.get(`http://localhost:1337/api/v1/department/${id}`)
            setDepartment(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleDepartment()
    }, [id])

    return (<>
        <h1>Hi there</h1>
        <h2>{id}</h2>
        <h2>{department.name}</h2>
        <h2>{department.dptCode}</h2>
    </>)
}

export default DepartmentDetails