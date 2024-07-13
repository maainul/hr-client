import axios from "axios";
import UnitForm from "./UnitForm";
import UnitList from "./UnitList";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";

function Units() {
  const [units, setUnits] = useState([]);
  const [open, setOpen] = useState(false);

  async function getUnitList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}unit/list`
      );
      setUnits(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUnitList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <UnitForm getUnitList={getUnitList} />
      </Modal>
      <UnitList units={units} />
    </>
  );
}

export default Units;
