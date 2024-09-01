import axios from "axios";
import { useEffect, useState } from "react";
import GroupForm from "./GroupForm";
import GroupList from "./GroupList";

function Groups() {
  const [groups, setGroups] = useState([]);

  async function getGroupList() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}auth/group/list`
      );
      const group = res.data.plist;
      console.log(group);
      setGroups(group);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  }

  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <>
      {/* <GroupForm getGroupList={getGroupList} /> */}
      {groups && <GroupList groups={groups} />}
      {/* Render groups or a loading state */}
      {!groups && <p>Loading...</p>}
    </>
  );
}

export default Groups;
