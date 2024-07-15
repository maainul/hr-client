import UnitForm from "./UnitForm";
import UnitList from "./UnitList";
import { useState } from "react";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function Units() {
  const [open, setOpen] = useState(false);
  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}unit/list`)

  if (loading) return <Loading />
  if (error) return <div>error....</div>

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <UnitForm getUnitList={refetch} />
      </Modal>
      <UnitList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit} />
    </>
  );
}

export default Units;
