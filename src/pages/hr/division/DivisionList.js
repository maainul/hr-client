import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "code", title: "Code" },
  { field: "status", title: "Status" },
];

function DivisionList({ data, paginationConstant, setPage, setLimit }) {
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

export default DivisionList;
