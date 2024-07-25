import { Table } from "../../../components/Table/Table"

const columns = [
    { field: "employee", title: "Employee Name" },
    { field: "leaveType", title: "Leave Type" },
    { field: "start_date", title: "Start Date" },
    { field: "end_date", title: "End Date" },
    { field: "numberOfDays", title: "Number Of Days" },
    { field: "superVisiorStatus", title: "Super Visior Stat" },
    { field: "dptHeadStatus", title: "Dpt Head Stat" },
    { field: "HRStatus", title: "HR Stat" },
]

function EmployeeLeaveList({ data, paginationConstant, setPage, setLimit }) {
    return (
        <Table
            columns={columns}
            data={data}
            paginationConstant={paginationConstant}
            setPage={setPage}
            setLimit={setLimit}

        />
    )
}

export default EmployeeLeaveList