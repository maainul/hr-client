import axios from "axios"
import { useState } from "react"


function UnitForm({ getUnitList }) {

    const [name, setName] = useState()


    async function saveUnit(e) {
        e.preventDefault()
        try {
            const unitData = { name, status: 1 }
            await axios.post('http://localhost:1337/api/v1/unit/create', unitData)
            getUnitList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Unit Form</h2>
            <form onSubmit={saveUnit}>
                <input type="text"
                    placeholder="Enter unit Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UnitForm