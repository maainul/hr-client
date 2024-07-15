import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "name" },
  { field: "benefit", title: "Benefit" },
  { field: "value", title: "Value" },
  { field: "status", title: "status" },
];

function PolicyList({ data, paginationConstant, setPage, setLimit }) {
  return <Table
    columns={columns}
    data={data}
    paginationConstant={paginationConstant}
    setPage={setPage}
    setLimit={setLimit}
  />;
}

export default PolicyList;
