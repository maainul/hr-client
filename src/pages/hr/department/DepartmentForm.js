import axios from "axios"
import { useState } from "react"


function DepartmentForm({ getDepartmentList }) {

    const [name, setName] = useState()
    const [dptCode, setDptCode] = useState()


    async function saveDepartment(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status: 1 }
            await axios.post('http://localhost:1337/api/v1/department/create', customerData)
            getDepartmentList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Department Form</h2>
            <form onSubmit={saveDepartment}>
                <input type="text"
                    placeholder="Enter department Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter department Code"
                    onChange={(e) => setDptCode(e.target.value)}
                    value={dptCode}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default DepartmentForm