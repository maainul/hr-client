import axios from "axios";
import { useEffect, useState } from "react";

const usePaginationData = (endPoint, initialPage = 1, initialLimit = 5) => {
  const [data, setData] = useState([]);
  const [paginationConstant, setPaginationConstant] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${endPoint}?page=${page}&limit=${limit}`);
        console.log(res.data);
        setData(res.data.data);
        setPaginationConstant({
          currentPageData: res.data.currentPageData,
          totalData: res.data.totalData,
          totalNumberOfPages: res.data.totalNumberOfPages,
          upToPageTotalData: res.data.upToPageTotalData,
          start:res.data.start
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endPoint, page, limit]);

  return {
    data,
    paginationConstant,
    loading,
    error,
    setPage,
    setLimit,
    refetch: () => setPage((prev) => prev),
  };
};

export default usePaginationData;
