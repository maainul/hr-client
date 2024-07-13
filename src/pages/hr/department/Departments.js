import axios from "axios";
import { useEffect, useState } from "react";
import DepartmentForm from "./DepartmentForm";
import DepartmentList from "./DepartmentList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  async function getDepartmentList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}department/list`
      );
      console.log(res);
      setDepartments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDepartmentList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setShowForm(true)} />
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <DepartmentForm getDepartmentList={getDepartmentList} />
      </Modal>
      <DepartmentList departments={departments} />
    </>
  );
}

export default Departments;
