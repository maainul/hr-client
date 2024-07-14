import axios from "axios";
import { useEffect, useState } from "react";
import DepartmentForm from "./DepartmentForm";
import DepartmentList from "./DepartmentList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function Departments() {
  const [showForm, setShowForm] = useState(false);

  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch,
  } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}department/list`);

  if (loading) return <Loading />;
  if (error) return <div>error....</div>;

  return (
    <>
      {/* Add Form Icon */}
      <AddIcon onClick={() => setShowForm(true)} />
      {/* Modal Form */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <DepartmentForm getDepartmentList={refetch} />
      </Modal>
      {/* Data List */}
      <DepartmentList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default Departments;
