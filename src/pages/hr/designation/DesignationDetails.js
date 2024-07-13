import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function DesignationDetails() {

    const { id } = useParams()
    const [designation, setDesignation] = useState({})

    useEffect(() => {
        async function getSingleDesignation() {
            try {
                const res = await axios.get(
                  `${process.env.REACT_APP_BACKEND_URL}designation/${id}`
                );
                setDesignation(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleDesignation()
    }, [id])

    return (<>
        <h1>Designation Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {designation.name}</h2>
        <h2>Status: {designation.status}</h2>
    </>)
}

export default DesignationDetails