import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UnitStatusUpdate() {

    const { id } = useParams()
    const [status, setStatus] = useState()
    const [name, setName] = useState()

    const navigate = useNavigate()

    // Department Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSingleUnit() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}unit/${id}`)
                setStatus(res.data.data.status)
                setName(res.data.data.name)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleUnit()
    }, [id])

    async function saveUnitStatus(e) {
        e.preventDefault()
        try {
            const customerData = { status, id }
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}unit/status`, customerData)
            navigate("/units")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Units Status Form</h2>
            <form onSubmit={saveUnitStatus}>
                <h1>{name}</h1>
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

export default UnitStatusUpdate