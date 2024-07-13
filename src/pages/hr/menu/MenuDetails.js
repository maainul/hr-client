import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function MenuDetails() {

    const { id } = useParams()
    const [menu, setMenu] = useState({})

    useEffect(() => {
        async function getSingleMenu() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/${id}`)
                setMenu(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleMenu()
    }, [id])

    return (<>
        <h1>Menu Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {menu.name}</h2>
        <h2>Code: {menu.dptCode}</h2>
        <h2>Status: {menu.status}</h2>
    </>)
}

export default MenuDetails