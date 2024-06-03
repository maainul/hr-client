import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function DepartmentDetails() {

    const { id } = useParams()
    const [department, setDepartment] = useState({})

    useEffect(() => {
        async function getSingleDepartment() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/department/${id}`)
                setDepartment(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleDepartment()
    }, [id])

    return (<>
        <h1>Department Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {department.name}</h2>
        <h2>Code: {department.dptCode}</h2>
        <h2>Status: {department.status}</h2>
    </>)
}

export default DepartmentDetails