import axios from "axios"
import { useEffect, useState } from "react"
import DesignationList from "./DesignationList"
import DesignationForm from "./DesignationForm"

function Designations() {

    const [designations, setDesignation] = useState([])

    async function getDesignationList() {
        try {
            const res = await axios.get('http://localhost:1337/api/v1/designation/list')
            setDesignation(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDesignationList()
    }, [])

    return (
        <>
            <DesignationForm getDesignationList={getDesignationList} />
            <DesignationList designations={designations} />
        </>
    )
}

export default Designations