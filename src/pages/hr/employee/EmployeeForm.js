import axios from "axios"
import { useState } from "react"


function EmployeeForm({ getEmployeeList }) {

    const [name, setName] = useState()
    const [dptCode, setDptCode] = useState()


    async function saveEmployee(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status: 1 }
            await axios.post('http://localhost:1337/api/v1/employee/create', customerData)
            getEmployeeList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Employee Form</h2>
            <form onSubmit={saveEmployee}>
                <input type="text"
                    placeholder="Enter employee Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter employee Code"
                    onChange={(e) => setDptCode(e.target.value)}
                    value={dptCode}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EmployeeForm