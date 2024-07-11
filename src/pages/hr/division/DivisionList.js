import { Table } from "../../../components/Table/Table";

const columns = [
  { field: "name", title: "Name" },
  { field: "code", title: "Code" },
  { field: "status", title: "Status" },
];


function DivisionList({ divisions }) {
  return (<Table columns={columns} data={divisions} />);
}

export default DivisionList;
