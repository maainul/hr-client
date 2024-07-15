import EmployeeForm from "./EmployeeForm"
import EmployeeList from "./EmployeeList"
import usePaginationData from "../../../hooks/usePaginationData"
import Loading from "../../../components/Loading"
import { useState } from "react";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";



function Employees() {
    const [showForm, setShowForm] = useState(false);
    const {
        data,
        paginationConstant,
        loading,
        error,
        setPage,
        setLimit,
        refetch } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}employee/list`)

    if (loading) return <Loading />
    if (error) return <div>error....</div>

    return (
        <>
            <AddIcon onClick={() => setShowForm(true)} />
            <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                <EmployeeForm getEmployeeList={refetch} />
            </Modal>
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
