import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function DivisionDetails() {

    const { id } = useParams()
    const [division, setDivision] = useState({})

    useEffect(() => {
        async function getSingleDivision() {
            try {
                const res = await axios.get(
                  `${process.env.REACT_APP_BACKEND_URL}division/${id}`
                );
                setDivision(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleDivision()
    }, [id])

    return (<>
        <h1>Division Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {division.name}</h2>
        <h2>Code: {division.code}</h2>
        <h2>Status: {division.status}</h2>
    </>)
}

export default DivisionDetails