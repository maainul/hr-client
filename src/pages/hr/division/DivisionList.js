import { Link } from "react-router-dom"


function DivisionList({ divisions }) {

    function renderDivisions() {
        return divisions.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.code}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/division/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/division/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/division/update/status/${dpt._id}`}>Update Status</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>Division List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDivisions()}
                </tbody>
            </table>
        </>
    )
}

export default DivisionList