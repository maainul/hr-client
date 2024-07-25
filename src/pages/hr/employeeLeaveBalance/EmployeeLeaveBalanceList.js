import { Table } from "../../../components/Table/Table"

const columns = [
    { field: "employee", title: "Employee Name" },
    { field: "leaveType", title: "Leave Type" },
    { field: "totalLeave", title: "Total Leave" },
    { field: "totalLeaveTaken", title: "Total Leave Taken" },
    { field: "leaveBalance", title: "Leave Balance" },
    { field: "leavePending", title: "Leave Pending" },
]


function EmployeeLeaveBalanceList({ data, paginationConstant, setPage, setLimit }) {
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

export default EmployeeLeaveBalanceList