import axios from "axios"
import { useEffect, useState } from "react"
import EmployeeForm from "./EmployeeForm"
import EmployeeList from "./EmployeeList"



function Employees() {

    const [employees, setEmployees] = useState([])

    async function getEmployeeList() {
        try {
            const res = await axios.get("http://localhost:1337/api/v1/employee/list")
            setEmployees(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEmployeeList()
    }, [])


    const notify = () => {
        toast.success("First Toast")
    }

    return (
        <>

            <EmployeeForm getEmployeeList={getEmployeeList} />
            <EmployeeList employees={employees} />
        </>
    )
}

export default Employees
