import axios from "axios";
import { useEffect, useState } from "react";

const usePaginationData = (endPoint, p, l) => {
  const [data, setData] = useState([]);
  const [paginationConstant, setPaginationConstant] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(p);
  const [limit, setLimit] = useState(l);
  console.log(endPoint);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(endPoint, {
          params: { page, limit },
          cancelToken: source.token,
        });
        setData(res.data.data);
        setPaginationConstant({
          currentPageData: res.data.currentPageData,
          totalData: res.data.totalData,
          totalNumberOfPages: res.data.totalNumberOfPages,
          upToPageTotalData: res.data.upToPageTotalData,
          start: res.data.start,
        });
        //setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      source.cancel("Component unmounted, request canceled");
    };
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
