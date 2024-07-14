import {  useState } from "react";
import DivisionForm from "./DivisionForm";
import DivisionList from "./DivisionList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function Divisions() {
  const [open, setOpen] = useState(false);
  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch,
  } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}division/list`);

  if (loading) return <Loading />;

  if (error) return <div>error...</div>;

  return (
    <>
      {/* Add Form Icon */}
      <AddIcon onClick={() => setOpen(true)} />
      {/* Modal Form */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <DivisionForm getDivisionList={refetch} />
      </Modal>
      {/* Data List and Pagination */}
      <DivisionList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default Divisions;
