import axios from "axios"
import { useEffect, useState } from "react"

function UnitForm({ getUnitList }) {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [dptList, setDptList] = useState([]) // State to store division list
    const [loading, setLoading] = useState(false)  // State for loading

    // Fetch division list for Dropdown list
    async function getDptList() {
        try {
            setLoading(true)  // Set loading to true before starting fetch
            const res = await axios.get('http://localhost:1337/api/v1/division/list')
            setDptList(res.data.data) // Assume the data is in res.data.data
            setLoading(false)  // Set loading to false after fetch
        } catch (error) {
            console.error("Error fetching division list:", error)
            setLoading(false)  // Ensure loading is set to false in case of error
        }
    }

    useEffect(() => {
        getDptList()
    }, [])

    async function saveUnit(e) {
        e.preventDefault()
        try {
            const unitData = { name, status: 1, division: code }
            await axios.post('http://localhost:1337/api/v1/unit/create', unitData)
            getUnitList()
        } catch (error) {
            console.error("Error saving unit:", error)
        }
    }

    return (
        <>
            <h2>Unit Form</h2>
            {loading ? (
                <p>Loading divisions...</p>
            ) : (
                <form onSubmit={saveUnit}>
                    <input
                        type="text"
                        placeholder="Enter unit name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required // Add required attribute for validation
                    />

                    <select
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required // Add required attribute for validation
                    >
                        <option value="">Select Division</option>
                        {dptList.map((dpt) => (
                            <option key={dpt._id} value={dpt._id}>{dpt.name}</option>
                        ))}
                    </select>

                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    )
}

export default UnitForm
