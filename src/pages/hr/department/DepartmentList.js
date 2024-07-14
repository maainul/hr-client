import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "dptCode", title: "Code" },
  { field: "dptLocation", title: "Location" },
  { field: "status", title: "Status" },
];

function DepartmentList({ data, paginationConstant, setPage, setLimit }) {
  return (
    <Table
      columns={columns}
      data={data}
      paginationConstant={paginationConstant}
      setPage={setPage}
      setLimit={setLimit}
    />
  );
}

export default DepartmentList;
