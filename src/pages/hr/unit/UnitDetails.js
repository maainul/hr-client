import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function UnitDetails() {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [divisionName, setDivisionName] = useState('')
    const [code, setCode] = useState('')

    useEffect(() => {
        async function getSingleUnit() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/unit/${id}`)
                setName(res.data.data.name)
                setStatus(res.data.data.status)
                setDivisionName(res.data.data.division.name)
                setCode(res.data.data.division.code)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleUnit()
    }, [id])

    return (<>
        <h1>Unit Details :</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Name: {status}</h2>
        <h1>Division Info : </h1>
        <h2>Name: {divisionName}</h2>
        <h2>Code : {code}</h2>

    </>)
}

export default UnitDetails