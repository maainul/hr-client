import { Link } from "react-router-dom"


function SalaryGradeList({ salaryGrades }) {

    function renderSalaryGrades() {
        return salaryGrades.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.grade_name}</td>
                    <td>{dpt.min_salary}</td>
                    <td>{dpt.max_salary}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/salary-grade/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/salary-grade/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/salary-grade/status/${dpt._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>SalaryGrade List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Min Salary</th>
                        <th>Max Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSalaryGrades()}
                </tbody>
            </table>
        </>
    )
}

export default SalaryGradeList