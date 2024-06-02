import axios from "axios"
import { useEffect, useState } from "react"
import DepartmentForm from "./DepartmentForm"
import DepartmentList from "./DepartmentList"

function Departments() {

    const [departments, setDepartments] = useState([])

    async function getDepartmentList() {
        try {
            const res = await axios.get("http://localhost:1337/api/v1/department/list")
            setDepartments(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDepartmentList()
    }, [])



    return (
        <>
            <DepartmentForm getDepartmentList={getDepartmentList} />
            <DepartmentList departments={departments} />
        </>
    )
}

export default Departments
