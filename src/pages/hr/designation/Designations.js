import { useEffect, useState } from "react";
import DesignationList from "./DesignationList";
import DesignationForm from "./DesignationForm";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";

function Designations() {
  const [showForm, setShowForm] = useState(false);

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
