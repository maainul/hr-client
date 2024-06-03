import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function DesignationStatusUpdate() {

    const { id } = useParams()
    const [status, setStatus] = useState()

    const navigate = useNavigate()

    // Department Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSingleDesignation() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/designation/${id}`)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleDesignation()
    }, [id])

    async function updateDesgStatus(e) {
        e.preventDefault()
        try {
            const desgData = { status }
            await axios.put(`http://localhost:1337/api/v1/designation/${id}`, desgData)
            navigate("/designations")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Designation Status Form</h2>
            <form onSubmit={updateDesgStatus}>
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

export default DesignationStatusUpdate