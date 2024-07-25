import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "description", title: "Description" },
  { field: "leave_limit", title: "Leave Limit" },
];

function LeaveTypeList({ data, paginationConstant, setPage, setLimit, setSearch }) {
  return (
    <Table
      columns={columns}
      data={data}
      paginationConstant={paginationConstant}
      setPage={setPage}
      setLimit={setLimit}
      setSearch={setSearch} // Pass setSearch to Table
    />
  );
}

export default LeaveTypeList;
