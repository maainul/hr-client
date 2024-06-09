import { Link } from "react-router-dom"


function PolicyList({ policies }) {

    function renderPolicy() {
        return policies.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.benefit}</td>
                    <td>{dpt.value}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/policy/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/policy/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/policy/update/status/${dpt._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>Policy List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Benefit</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderPolicy()}
                </tbody>
            </table>
        </>
    )
}

export default PolicyList