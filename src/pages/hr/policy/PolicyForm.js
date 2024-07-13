import axios from "axios";
import { useState } from "react";
import FormHeading from "../../../components/FormHeading";
import { toast } from "react-toastify";

function PolicyForm({ getPolicyList }) {
  const [name, setName] = useState();
  const [benefit, setBenefit] = useState();
  const [value, setValue] = useState();

  async function savePolicy(e) {
    e.preventDefault();
    try {
      const customerData = { name, benefit, value, status: 1 };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}policy/create`,
        customerData
      );
      toast.success('Policy added successfully')
      getPolicyList();
    } catch (error) {
      toast.error('Error in add Policy')
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Policy Form" />
        <form onSubmit={savePolicy}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter policy Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter Benefit"
              onChange={(e) => setBenefit(e.target.value)}
              value={benefit}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter Value"
              onChange={(e) => setValue(e.target.value)}
              value={value}
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

export default PolicyForm;
