import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function PolicyDetails() {

    const { id } = useParams()
    const [policy, setPolicy] = useState({})

    useEffect(() => {
        async function getSinglePolicy() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/policy/${id}`)
                setPolicy(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSinglePolicy()
    }, [id])

    return (<>
        <h1>Policy Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {policy.name}</h2>
        <h2>Benefit: {policy.benefit}</h2>
        <h2>Value: {policy.value}</h2>
        <h2>Status: {policy.status}</h2>
    </>)
}

export default PolicyDetails