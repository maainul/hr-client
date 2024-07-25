import axios from "axios";
import { useEffect, useState } from "react";
import FormHeading from "../../../components/FormHeading";
import { toast } from "react-toastify";
import usePaginationData from "../../../hooks/usePaginationData";

function UnitForm({ getUnitList }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const { data } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}division/list`
  );

  async function saveUnit(e) {
    e.preventDefault();
    try {
      const unitData = { name, status: 1, division: code };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}unit/create`,
        unitData
      );
      toast.success("Unit Added Successfully");
      getUnitList();
      setName('')
      setCode('')
    } catch (error) {
      toast.error("Error in Add Unit");
      console.error("Error saving unit:", error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Unit Form" />

        <form onSubmit={saveUnit}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter unit name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required // Add required attribute for validation
              className="input_sm"
            />
            <div class="select relative flex items-center border rounded-lg w-full">
              <div class="absolute right-1">
                <i class="ri-arrow-down-s-line text-[26px] text-secondary"></i>
              </div>
              <select
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
              >
                <option value="">Select Division</option>
                {data.map((dpt) => (
                  <option key={dpt._id} value={dpt._id}>
                    {dpt.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="btn_sm_rounded_md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UnitForm;
