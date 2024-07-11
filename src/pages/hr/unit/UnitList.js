import { Link } from "react-router-dom";
import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "status", title: "Status" },
];

function UnitList({ units }) {
  return <Table columns={columns} data={units} />;
}

export default UnitList;
