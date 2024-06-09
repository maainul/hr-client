import { Link } from "react-router-dom"


function GroupList({ groups }) {

    function renderGroups() {
        return groups.map((dpt, i) => {
            return (
                <tr key={i}>
                    <td>{dpt.name}</td>
                    <td>{dpt.code}</td>
                    <td><Link to={`/group/${dpt._id}`}>View</Link></td>
                    <td><Link to={`/group/update/${dpt._id}`}>Edit</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2>Group List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderGroups()}
                </tbody>
            </table>
        </>
    )
}

export default GroupList