
import { useState } from "react";
import SalaryGradeForm from "./SalaryGradeForm";
import SalaryGradeList from "./SalaryGradeList";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";
import usePaginationData from "../../../hooks/usePaginationData";
import Loading from "../../../components/Loading";

function SalaryGrades() {
  const [open, setOpen] = useState(false);
  const {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch } = usePaginationData(`${process.env.REACT_APP_BACKEND_URL}salary-grade/list`)
  if (loading) return <Loading />
  if (error) return <div>error....</div>

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <SalaryGradeForm getSalaryGradeList={refetch} />
      </Modal>
      <SalaryGradeList
        data={data}
        paginationConstant={paginationConstant}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default SalaryGrades;
