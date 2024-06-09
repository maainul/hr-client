import axios from "axios"
import { useState } from "react"


function SalaryGradeForm({ getSalaryGradeList }) {

    const [name, setName] = useState()
    const [minSalary, setMinSalary] = useState()
    const [maxSalary, setMaxSalary] = useState()


    async function saveSalaryGrade(e) {
        e.preventDefault()
        try {
            const salData = { grade_name: name, min_salary: minSalary, max_salary: maxSalary, status: 1 }
            await axios.post('http://localhost:1337/api/v1/salary-grade/create', salData)
            getSalaryGradeList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>SalaryGrade Form</h2>
            <form onSubmit={saveSalaryGrade}>
                <input type="text"
                    placeholder="Enter salary-grade Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="number"
                    placeholder="Enter Min salary"
                    onChange={(e) => setMinSalary(e.target.value)}
                    value={minSalary}
                />
                <input type="number"
                    placeholder="Enter MAX Salary"
                    onChange={(e) => setMaxSalary(e.target.value)}
                    value={maxSalary}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SalaryGradeForm