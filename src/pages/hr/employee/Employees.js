import EmployeeList from "./EmployeeList"
import usePaginationData from "../../../hooks/usePaginationData"
import Loading from "../../../components/Loading"

function Employees() {
    const {
        data,
        paginationConstant,
        loading,
        error,
        setPage,
        setLimit,
    } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}employee/list`,1,10)

    if (loading) return <Loading />
    if (error) return <div>error....</div>

    return (
        <>
            <EmployeeList
                data={data}
                paginationConstant={paginationConstant}
                setPage={setPage}
                setLimit={setLimit}
            />
        </>
    )
}

export default Employees
