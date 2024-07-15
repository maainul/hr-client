import { useState } from "react";
import PolicyForm from "./PolicyForm";
import PolicyList from "./PolicyList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";
import Loading from "../../../components/Loading";
import usePaginationData from "../../../hooks/usePaginationData";

function Policies() {
  const [open, setOpen] = useState(false);
  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}policy/list`)


  if (loading) return <Loading />
  if (error) return <div>error....</div>

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <PolicyForm getPolicyList={refetch} />
      </Modal>
      <PolicyList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default Policies;
