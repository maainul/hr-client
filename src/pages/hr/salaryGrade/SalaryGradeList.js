import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "grade_name", title: "Grade Name" },
  { field: "min_salary", title: "Min Salary" },
  { field: "max_salary", title: "Max Salary" },
  { field: "status", title: "status" },
];

function SalaryGradeList({ data, paginationConstant, setPage, setLimit }) {
  return <Table
    columns={columns}
    data={data}
    paginationConstant={paginationConstant}
    setPage={setPage}
    setLimit={setLimit}
  />;
}

export default SalaryGradeList;
