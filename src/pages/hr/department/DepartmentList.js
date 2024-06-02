import { Link } from "react-router-dom"


function DepartmentList({ departments }) {

    function renderDepartments() {
        return departments.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.dptCode}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/department/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/department/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/department/update/status/${dpt._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>Department List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDepartments()}
                </tbody>
            </table>
        </>
    )
}

export default DepartmentList