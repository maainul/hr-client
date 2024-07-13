import axios from "axios";
import { useEffect, useState } from "react";
import PolicyForm from "./PolicyForm";
import PolicyList from "./PolicyList";
import Modal from "../../../components/Modal";
import AddIcon from "../../../components/Icon/AddIcon";

function Policies() {
  const [policies, setPolicy] = useState([]);
  const [open, setOpen] = useState(false);
  async function getPolicyList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}policy/list`
      );
      setPolicy(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPolicyList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <PolicyForm getPolicyList={getPolicyList} />
      </Modal>
      <PolicyList policies={policies} />
    </>
  );
}

export default Policies;
