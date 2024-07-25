import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function LeaveTypeDetails() {

    const { id } = useParams()
    const [leaveType, setLeaveType] = useState({})

    useEffect(() => {
        async function getSingleLeaveType() {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}leave-type/${id}`
                );
                setLeaveType(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleLeaveType()
    }, [id])

    return (<>
        <h1>LeaveType Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {leaveType.name}</h2>
        <h2>Code: {leaveType.description}</h2>
        <h2>Status: {leaveType.leave_limit}</h2>
    </>)
}

export default LeaveTypeDetails