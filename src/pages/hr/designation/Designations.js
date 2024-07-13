import axios from "axios";
import { useEffect, useState } from "react";
import DesignationList from "./DesignationList";
import DesignationForm from "./DesignationForm";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";

function Designations() {
  const [designations, setDesignation] = useState([]);
  const [showForm, setShowForm] = useState(false);

  async function getDesignationList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}designation/list`
      );
      setDesignation(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDesignationList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setShowForm(true)} />
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <DesignationForm getDesignationList={getDesignationList} />
      </Modal>
      <DesignationList designations={designations} />
    </>
  );
}

export default Designations;
