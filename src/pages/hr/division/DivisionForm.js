import axios from "axios";
import { useState } from "react";
import FormHeading from "../../../components/FormHeading";

function DivisionForm({ getDivisionList }) {
  const [name, setName] = useState();
  const [code, setCode] = useState();

  async function saveDivision(e) {
    e.preventDefault();
    try {
      const divData = { name, code, status: 1 };
      await axios.post("http://localhost:1337/api/v1/division/create", divData);
      getDivisionList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Division Form" />
        <form onSubmit={saveDivision}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter division Name."
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter division Code."
              onChange={(e) => setCode(e.target.value)}
              value={code}
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

export default DivisionForm;
