import axios from "axios"
import { useState } from "react"


function DivisionForm({ getDivisionList }) {

    const [name, setName] = useState()
    const [code, setCode] = useState()


    async function saveDivision(e) {
        e.preventDefault()
        try {
            const divData = { name, code, status: 1 }
            await axios.post('http://localhost:1337/api/v1/division/create', divData)
            getDivisionList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Division Form</h2>
            <form onSubmit={saveDivision}>
                <input type="text"
                    placeholder="Enter division Name."
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter division Code."
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default DivisionForm