import { Link } from "react-router-dom";
import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "grade_name", title: "Grade Name" },
  { field: "min_salary", title: "Min Salary" },
  { field: "max_salary", title: "Max Salary" },
  { field: "status", title: "status" },
];

function SalaryGradeList({ salaryGrades }) {
  return <Table columns={columns} data={salaryGrades} />;
}

export default SalaryGradeList;
