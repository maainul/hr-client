import axios from "axios";
import DepartmentList from "../department/DepartmentList";
import DepartmentForm from "../department/DepartmentForm";
import { useEffect, useState } from "react";
import AddIcon from "../../../components/Icon/AddIcon";
import Modal from "../../../components/Modal";

function Departments() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [limit, setLimit] = useState(10); // Default limit is 10
  const [status, setStatus] = useState(1);

  const [numberOfPages, setNumberOfPages] = useState();
  const [pageDataCount, setPageDataCount] = useState();
  const [startPageData, setStartPageData] = useState();
  const [totalDataCount, setTotalDataCount] = useState();
  const [upToPageTotalData, setUpToPageTotalData] = useState();

  const fetchDpt = async () => {
    const page = 1;
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}department/list?page=${page}&limit=${limit}&status=${status}`
    );
    setData(response.data.data);
    setNumberOfPages(response.data.numberOfPages);
    setPageDataCount(response.data.pageDataCount);
    setStartPageData(response.data.startPageData);
    setTotalDataCount(response.data.totalDataCount);
    setUpToPageTotalData(response.data.upToPageTotalData);
  };

  useEffect(() => {
    fetchDpt();
  }, [limit, status]);

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };
  const handleStatusChange = (e) => {
    setStatus(Number(e.target.value));
  };

  return (
    <>
      <AddIcon onClick={() => setShowForm(true)} />
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <DepartmentForm refetchData={fetchDpt} />
      </Modal>
      <DepartmentList
        data={data}
        onChangeStatus={handleStatusChange}
        onLimitChange={handleLimitChange}
        numberOfPages={numberOfPages}
        pageDataCount={pageDataCount}
        startPageData={startPageData}
        totalDataCount={totalDataCount}
        upToPageTotalData={upToPageTotalData}
      />
    </>
  );
}

export default Departments;
