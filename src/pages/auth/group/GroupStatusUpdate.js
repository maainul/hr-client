import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function DepartmentStatusUpdate() {

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
        async function getSingleDepartment() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}department/${id}`)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleDepartment()
    }, [id])

    async function saveDepartmentStatus(e) {
        e.preventDefault()
        try {
            const customerData = { status }
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}department/${id}`, customerData)
            navigate("/departments")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Department Status Form</h2>
            <form onSubmit={saveDepartmentStatus}>
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

export default DepartmentStatusUpdate