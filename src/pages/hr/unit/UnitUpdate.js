import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UnitUpdate() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [status, setStatus] = useState()
    const [dptList, setDptList] = useState([]) // State to store division list

    const navigate = useNavigate()


    //Fetch Division list for Dropdown List
    async function getDptList() {
        try {
            const res = await axios.get('http://localhost:1337/api/v1/division/list')
            setDptList(res.data.data) // Assume the data is in res.data.data
        } catch (error) {
            console.error("Error Fetching division list:", error)
        }
    }


    useEffect(() => {
        getDptList()
    }, [])

    // Department Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSingleUnit() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/unit/${id}`)
                setName(res.data.data.name)
                setStatus(res.data.data.status)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleUnit()
    }, [id])

    async function saveUnit(e) {
        e.preventDefault()
        try {
            const unitData = { name, status, division: code }
            await axios.put(`http://localhost:1337/api/v1/unit/${id}`, unitData)
            navigate("/units")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Unit Form</h2>
            <form onSubmit={saveUnit}>
                <input type="text"
                    placeholder="Enter unit Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <select
                    id="status-select"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                >
                    <option value="" disabled> Select Status</option>
                    {dptList.map((div) => (
                        <option key={div._id} value={div.code}>{div.name}</option>
                    ))}

                </select>

                <select
                    id="status-select"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                >
                    <option value="" disabled> Select Status</option>
                    {statuses.map((statOption) => (
                        <option key={statOption.code} value={statOption.code}>{statOption.name}</option>
                    ))}

                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UnitUpdate