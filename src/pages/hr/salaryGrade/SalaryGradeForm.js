import axios from "axios";
import { useState } from "react";
import FormHeading from "../../../components/FormHeading";

function SalaryGradeForm({ getSalaryGradeList }) {
  const [name, setName] = useState();
  const [minSalary, setMinSalary] = useState();
  const [maxSalary, setMaxSalary] = useState();

  async function saveSalaryGrade(e) {
    e.preventDefault();
    try {
      const salData = {
        grade_name: name,
        min_salary: minSalary,
        max_salary: maxSalary,
        status: 1,
      };
      await axios.post(
        "http://localhost:1337/api/v1/salary-grade/create",
        salData
      );
      getSalaryGradeList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8 rounded-lg">
        <FormHeading title="Salary Grade Form" />
        <form onSubmit={saveSalaryGrade}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter salary-grade Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input_sm"
            />
            <input
              type="number"
              placeholder="Enter Min salary"
              onChange={(e) => setMinSalary(e.target.value)}
              value={minSalary}
              className="input_sm"
            />
            <input
              type="number"
              placeholder="Enter MAX Salary"
              onChange={(e) => setMaxSalary(e.target.value)}
              value={maxSalary}
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

export default SalaryGradeForm;
