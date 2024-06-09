import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function SalaryGradeStatusUpdate() {

    const { id } = useParams()
    const [status, setStatus] = useState()

    const navigate = useNavigate()

    // SalaryGrade Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSingleSalaryGrade() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/salary-grade/${id}`)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleSalaryGrade()
    }, [id])

    async function saveSalaryGradeStatus(e) {
        e.preventDefault()
        try {
            const customerData = { status }
            await axios.put(`http://localhost:1337/api/v1/salary-grade/${id}`, customerData)
            navigate("/salary-grade")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update SalaryGrade Status Form</h2>
            <form onSubmit={saveSalaryGradeStatus}>
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

export default SalaryGradeStatusUpdate