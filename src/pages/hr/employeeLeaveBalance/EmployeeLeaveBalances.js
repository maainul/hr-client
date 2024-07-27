import Loading from "../../../components/Loading"
import usePaginationData from "../../../hooks/usePaginationData"
import EmployeeLeaveBalanceList from "./EmployeeLeaveBalanceList"

function EmployeeLeaveBalances() {
  const { data, paginationConstant, loading, error, setPage, setLimit } =
    usePaginationData(
      `${process.env.REACT_APP_BACKEND_URL}employee-leave-balance/list`,
      1,
      10
    );
  console.log(data)


  const transferedData = data.map(item=>({
    employee : item.employee.full_name,
    employeeID : item.employee.employeeID,
    leaveType:item.leaveType.name,
    totalLeave:item.totalLeave,
    totalLeaveTaken:item.totalLeaveTaken,
    leaveBalance:item.leaveBalance,
    leavePending:item.leavePending
  }))


  if (loading) return <Loading />
  if (error) return <div>error....</div>

  return (
    <>
      <EmployeeLeaveBalanceList
        data={transferedData}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  )
}

export default EmployeeLeaveBalances
