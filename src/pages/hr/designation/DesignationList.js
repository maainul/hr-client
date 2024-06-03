import { Link } from "react-router-dom"

function DesignationList({ designations }) {


    function renderDesignations() {
        if (!designations || designations.length === 0) {
            return (
                <tr>
                    <td colSpan="3">No designations available.</td>
                </tr>
            );
        }
        return designations.map((dsg, i) => {
            return (
                <tr key={i}>
                    <td>{dsg.name}</td>
                    <td>{dsg.status}</td>
                    <td><Link to={`/designation/${dsg._id}`}>View</Link></td>
                    <td><Link to={`/designation/update/${dsg._id}`}>Edit</Link></td>
                    <td><Link to={`/designation/update/status/${dsg._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1>Designation List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDesignations()}
                </tbody>
            </table>
        </>
    )
}

export default DesignationList