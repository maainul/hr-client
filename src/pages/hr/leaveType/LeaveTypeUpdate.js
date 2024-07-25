import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LeaveTypeUpdate() {
  const { id } = useParams();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [leave_limit, setLeaveLimit] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getSingleLeaveType() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}leave-type/${id}`
        );
        setName(res.data.data.name);
        setDescription(res.data.data.description);
        setLeaveLimit(res.data.data.leaveLimit);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleLeaveType();
  }, [id]);

  async function saveLeaveType(e) {
    e.preventDefault();
    try {
      const ld = { name, description, leave_limit };
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}leave-type/${id}`,
        ld
      );
      navigate("/leave-type");
      toast.success("Leave Type Added Successfully");
    } catch (error) {
      toast.error("Error While add Leave Type");
    }
  }

  return (
    <>
      <h2>Update LeaveType Form</h2>
      <form onSubmit={saveLeaveType}>
        <input
          type="text"
          placeholder="Enter department Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          placeholder="Enter leave limit"
          onChange={(e) => setLeaveLimit(e.target.value)}
          value={leave_limit}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default LeaveTypeUpdate;
