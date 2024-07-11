import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "status", title: "Status" },
];

function DesignationList({ designations }) {
  return <Table columns={columns} data={designations} />
}

export default DesignationList
