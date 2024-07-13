import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function SalaryGradeUpdate() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [minSalary, setMinSalary] = useState()
    const [maxSalary, setMaxSalary] = useState()
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
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}salary-grade/${id}`)
                setName(res.data.data.grade_name)
                setMinSalary(res.data.data.min_salary)
                setMaxSalary(res.data.data.max_salary)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleSalaryGrade()
    }, [id])

    async function saveSalaryGrade(e) {
        e.preventDefault()
        try {
            const salData = { grade_name: name, min_salary: minSalary, max_salary: maxSalary, status: status }
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}salary-grade/${id}`, salData)
            navigate("/salary-grade")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update SalaryGrade Form</h2>
            <form onSubmit={saveSalaryGrade}>
                <input type="text"
                    placeholder="Enter department Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter department Code"
                    onChange={(e) => setMinSalary(e.target.value)}
                    value={minSalary}
                />
                <input type="text"
                    placeholder="Enter department Code"
                    onChange={(e) => setMaxSalary(e.target.value)}
                    value={maxSalary}
                />
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

export default SalaryGradeUpdate