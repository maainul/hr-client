import axios from "axios"
import { useEffect, useState } from "react"
import EmployeeForm from "./EmployeeForm"
import EmployeeList from "./EmployeeList"



function Employees() {

    const [employees, setEmployees] = useState([])

    async function getEmployeeList() {
        try {
            const res = await axios.get(
              `${process.env.REACT_APP_BACKEND_URL}employee/list`
            );
            setEmployees(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEmployeeList()
    }, [])

    return (
        <>

            <EmployeeForm getEmployeeList={getEmployeeList} />
            <EmployeeList employees={employees} />
        </>
    )
}

export default Employees
