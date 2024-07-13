import axios from "axios";
import { useEffect, useState } from "react";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";

function Menus() {
  const [menus, setMenus] = useState([]);
  const [open, setOpen] = useState(false);

  async function getMenuList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}menu/list`
      );
      setMenus(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <>
      <AddIcon onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <MenuForm getMenuList={getMenuList} />
      </Modal>
      <MenuList menus={menus} />
    </>
  );
}

export default Menus;
