import EmployeeLeaveList from "./EmployeeLeaveList"
import usePaginationData from "../../../hooks/usePaginationData"
import Loading from "../../../components/Loading"
import { useState } from "react";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";
import EmployeeLeaveForm from "./EmployeeLeaveForm";

function EmployeeLeaves() {
    const [showForm, setShowForm] = useState(false);
    const { data, paginationConstant, loading, error, setPage, setLimit } =
      usePaginationData(
        `${process.env.REACT_APP_BACKEND_URL}employee-leave/list`,
        1,
        10
      );


    if (loading) return <Loading />
    if (error) return <div>error....</div>

    return (
        <>
            <AddIcon onClick={() => setShowForm(true)} />
            <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                <EmployeeLeaveForm />
            </Modal>
            <EmployeeLeaveList
                data={{}}
                paginationConstant={paginationConstant}
                setPage={setPage}
                setLimit={setLimit}
            />
        </>
    )
}

export default EmployeeLeaves
