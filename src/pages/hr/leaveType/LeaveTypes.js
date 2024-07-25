import { useState } from "react";
import LeaveTypeForm from "./LeaveTypeForm";
import LeaveTypeList from "./LeaveTypeList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function LeaveTypes() {
  const [showForm, setShowForm] = useState(false);

  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch,
  } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}leave-type/list`,
    1,
    10
  );

  if (loading) return <Loading />;
  if (error) return <div>error....</div>;

  return (
    <>
      {/* Add Form Icon */}
      <AddIcon onClick={() => setShowForm(true)} />
      {/* Modal Form */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <LeaveTypeForm getLeaveTypeList={refetch} />
      </Modal>
      {/* Data List */}
      <LeaveTypeList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default LeaveTypes;
