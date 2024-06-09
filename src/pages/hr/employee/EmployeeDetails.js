import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function EmployeeDetails() {

    const { id } = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        async function getSingleEmployee() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/employee/${id}`)
                setEmployee(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleEmployee()
    }, [id])

    return (<>
        <h1>Employee Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {employee.name}</h2>
        <h2>Code: {employee.dptCode}</h2>
        <h2>Status: {employee.status}</h2>
    </>)
}

export default EmployeeDetails