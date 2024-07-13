import axios from "axios";
import { useEffect, useState } from "react";
import PolicyForm from "./PolicyForm";
import PolicyList from "./PolicyList";

function Policies() {
  const [policies, setPolicy] = useState([]);

  async function getPolicyList() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}policy/list`);
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
      <PolicyForm getPolicyList={getPolicyList} />
      <PolicyList policies={policies} />
    </>
  );
}

export default Policies;
