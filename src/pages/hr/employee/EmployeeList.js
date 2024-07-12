import { Table } from "../../../components/Table/Table"

const columns = [
    { field: "full_name", title: "Name" },
    { field: "email", title: "Email" },
    { field: "phone", title: "phone" },
    { field: "date_of_birth", title: "Birth Date" },
    { field: "date_of_joining", title: "Joining Date" },
    { field: "status", title: "Status" },
]


function EmployeeList({ employees }) {
    return (
        <Table columns={columns} data={employees} />
    )
}

export default EmployeeList