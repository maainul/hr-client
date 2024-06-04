import { Link } from "react-router-dom"


function UnitList({ units }) {

    function renderUnits() {
        return units.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.division.name}</td>
                    <td>{dpt.division.code}</td>
                    <td>{dpt.status}</td>
                    <td><Link to={`/unit/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/unit/update/${dpt._id}`}>Edit</Link></td>
                    <td><Link to={`/unit/update/status/${dpt._id}`}>Update Status</Link></td>
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
                        <th>Division</th>
                        <th>Code</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUnits()}
                </tbody>
            </table>
        </>
    )
}

export default UnitList