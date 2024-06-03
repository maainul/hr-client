import axios from "axios"
import { useState } from "react"

function DesignationForm({ getDesignationList }) {

    const [name, setName] = useState()


    async function saveDesignation(e) {
        e.preventDefault()
        try {
            const designationData = { name, status: 1 }
            await axios.post('http://localhost:1337/api/v1/designation/create', designationData)
            await getDesignationList()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h1>Designation Form</h1>
            <form onSubmit={saveDesignation}>
                <input type="text"
                    placeholder="Enter Designation"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default DesignationForm