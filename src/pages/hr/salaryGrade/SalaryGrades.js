import axios from "axios";
import { useEffect, useState } from "react";
import SalaryGradeForm from "./SalaryGradeForm";
import SalaryGradeList from "./SalaryGradeList";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";

function SalaryGrades() {
  const [salaryGrades, setSalaryGrades] = useState([]);
  const [open, setOpen] = useState(false);
  async function getSalaryGradeList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}salary-grade/list`
      );
      setSalaryGrades(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSalaryGradeList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <SalaryGradeForm getSalaryGradeList={getSalaryGradeList} />
      </Modal>
      <SalaryGradeList salaryGrades={salaryGrades} />
    </>
  );
}

export default SalaryGrades;
