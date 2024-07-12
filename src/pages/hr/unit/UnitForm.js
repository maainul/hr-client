import axios from "axios";
import { useEffect, useState } from "react";
import FormHeading from "../../../components/FormHeading";
import { toast } from "react-toastify";

function UnitForm({ getUnitList }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [dptList, setDptList] = useState([]); // State to store division list
  const [loading, setLoading] = useState(false); // State for loading

  // Fetch division list for Dropdown list
  async function getDptList() {
    try {
      setLoading(true); // Set loading to true before starting fetch
      const res = await axios.get("http://localhost:1337/api/v1/division/list");
      setDptList(res.data.data); // Assume the data is in res.data.data
      setLoading(false); // Set loading to false after fetch
    } catch (error) {
      console.error("Error fetching division list:", error);
      setLoading(false); // Ensure loading is set to false in case of error
    }
  }

  useEffect(() => {
    getDptList();
  }, []);

  async function saveUnit(e) {
    e.preventDefault();
    try {
      const unitData = { name, status: 1, division: code };
      await axios.post("http://localhost:1337/api/v1/unit/create", unitData);
      toast.success('Unit Added Successfully')
      getUnitList();
    } catch (error) {
      toast.error('Error in Add Unit')
      console.error("Error saving unit:", error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Unit Form" />
        {loading ? (
          <p>Loading divisions...</p>
        ) : (
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

              {/* <select
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required // Add required attribute for validation
              >
                <option value="">Select Division</option>
                {dptList.map((dpt) => (
                  <option key={dpt._id} value={dpt._id}>
                    {dpt.name}
                  </option>
                ))}
              </select> */}

              <div class="select relative flex items-center border py-2 rounded-lg">
                <div class="absolute right-4">
                  <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                </div>
                <select
                  name="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <button type="submit" className="btn_sm_rounded_md">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default UnitForm;
