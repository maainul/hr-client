import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function PolicyStatusUpdate() {

    const { id } = useParams()
    const [status, setStatus] = useState()

    const navigate = useNavigate()

    // Policy Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSinglePolicy() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/policy/${id}`)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSinglePolicy()
    }, [id])

    async function savePolicyStatus(e) {
        e.preventDefault()
        try {
            const customerData = { status }
            await axios.put(`http://localhost:1337/api/v1/policy/${id}`, customerData)
            navigate("/policy")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Policy Status Form</h2>
            <form onSubmit={savePolicyStatus}>
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

export default PolicyStatusUpdate