import axios from "axios";
import { useState } from "react";
import FormHeading from "../../../components/FormHeading";
import { toast } from "react-toastify";

function DesignationForm({ getDesignationList }) {
  const [name, setName] = useState();

  async function saveDesignation(e) {
    e.preventDefault();
    try {
      const designationData = { name, status: 1 };
      await axios.post(
        "http://localhost:1337/api/v1/designation/create",
        designationData
      );
      toast.success('Designation Added Successfully')
      await getDesignationList();
    } catch (error) {
      toast.error('Error in Designation Add')
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Designation Form" />
        <form onSubmit={saveDesignation}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter Designation"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <button type="submit" className="btn_sm_rounded_md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DesignationForm;
