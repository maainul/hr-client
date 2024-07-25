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


    if (loading) return <Loading />
    if (error) return <div>error....</div>

    return (
        <>
            <EmployeeLeaveBalanceList
                data={data}
                paginationConstant={paginationConstant}
                setPage={setPage}
                setLimit={setLimit}
            />
        </>
    )
}

export default EmployeeLeaveBalances
