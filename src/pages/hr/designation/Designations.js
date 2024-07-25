import { useState } from "react";
import DesignationList from "./DesignationList";
import DesignationForm from "./DesignationForm";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function Designations() {
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
    `${process.env.REACT_APP_BACKEND_URL}designation/list`,
    1,
    10
  );

  if (loading) return <Loading />;
  if (error) return <div>error....</div>;

  return (
    <>
      <AddIcon onClick={() => setShowForm(true)} />
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <DesignationForm getDesignationList={refetch} />
      </Modal>
      <DesignationList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default Designations;
