import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function UnitDetails() {

    const { id } = useParams()
    const [unit, setUnit] = useState({})

    useEffect(() => {
        async function getSingleUnit() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/unit/${id}`)
                setUnit(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleUnit()
    }, [id])

    return (<>
        <h1>Unit Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {unit.name}</h2>
        <h2>Status: {unit.status}</h2>
    </>)
}

export default UnitDetails