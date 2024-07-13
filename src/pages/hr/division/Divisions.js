import axios from "axios"
import { useEffect, useState } from "react"
import DivisionForm from "./DivisionForm"
import DivisionList from "./DivisionList"

function Divisions() {

    const [divisions, setDivisions] = useState([])

    async function getDivisionList() {
        try {
            const res = await axios.get(
              `${process.env.REACT_APP_BACKEND_URL}division/list`
            );
            setDivisions(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDivisionList()
    }, [])



    return (
        <>
            <DivisionForm getDivisionList={getDivisionList} />
            <DivisionList divisions={divisions} />
        </>
    )
}

export default Divisions
