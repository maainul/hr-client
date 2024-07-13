import axios from "axios"
import UnitForm from "./UnitForm"
import UnitList from "./UnitList"
import { useEffect, useState } from "react"

function Units() {
    const [units, setUnits] = useState([])

    async function getUnitList() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}unit/list`)
            setUnits(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUnitList()
    }, [])



    return (
        <>
            <UnitForm getUnitList={getUnitList} />
            <UnitList units={units} />
        </>
    )
}

export default Units
