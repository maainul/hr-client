import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "name" },
  { field: "benefit", title: "Benefit" },
  { field: "value", title: "Value" },
  { field: "status", title: "status" },
];

function PolicyList({ policies }) {
  return <Table columns={columns} data={policies} />;
}

export default PolicyList;
