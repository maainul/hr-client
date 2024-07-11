import { Link } from "react-router-dom";
import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "dptCode", title: "Code" },
  { field: "dptLocation", title: "Location" },
  { field: "status", title: "Status" },
];

function DepartmentList({ departments }) {
  return <Table columns={columns} data={departments} />;
}

export default DepartmentList;
