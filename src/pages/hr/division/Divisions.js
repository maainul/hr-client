import axios from "axios";
import { useEffect, useState } from "react";
import DivisionForm from "./DivisionForm";
import DivisionList from "./DivisionList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";

function Divisions() {
  const [divisions, setDivisions] = useState([]);
  const [open, setOpen] = useState(false);

  async function getDivisionList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}division/list`
      );
      setDivisions(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDivisionList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <DivisionForm getDivisionList={getDivisionList} />
      </Modal>
      <DivisionList divisions={divisions} />
    </>
  );
}

export default Divisions;
