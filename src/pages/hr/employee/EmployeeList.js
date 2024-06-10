import { Link } from "react-router-dom"


function EmployeeList({ employees }) {

    function renderEmployees() {
        return employees.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.full_name}</td>
                    <td>{dpt.email}</td>
                    <td>{dpt.phone}</td>
                    <td>{dpt.date_of_joining}</td>
                    <td>{dpt.emergency_contact_name}</td>
                    <td>{dpt.date_of_birth}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/employee/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/employee/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/employee/update/status/${dpt._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>Employee List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Date of Joining</th>
                        <th>Emergency Contact</th>
                        <th>Date of Birth Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEmployees()}
                </tbody>
            </table>
        </>
    )
}

export default EmployeeList