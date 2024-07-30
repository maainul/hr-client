import axios from "axios";
import { useQuery } from "react-query";

export const fetchDepartments = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}department/list`
  );
  console.log("###################");
  console.log(data);
  console.log("###################");
  return data;
};

export const fetchDesignations = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}designation/list`
  );
  return data;
};

export const fetchSalaryGrades = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}salary-grade/list`
  );
  return data;
};

export const fetchPolicies = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}policy/list`
  );
  return data;
};

export const fetchLeaveTypes = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}leave-type/list`
  );
  return data;
};
