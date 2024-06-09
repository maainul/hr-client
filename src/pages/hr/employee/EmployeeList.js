import { Link } from "react-router-dom"


function EmployeeList({ employees }) {

    



    function renderEmployees() {
        return employees.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.dptCode}</td>
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
                        <th>Code</th>
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