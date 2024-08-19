import axios from "axios";
import { useReducer, useState } from "react";
import FormHeading from "../../../components/FormHeading";
import { toast } from "react-toastify";

const SET_NAME = "SET_NAME";
const SET_CODE = "SET_CODE";
const RESET_FORM = "RESET_FORM";

function DepartmentForm({ refetchData }) {
  const initialState = {
    name: "",
    dptCode: "",
    status: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case SET_NAME:
        return { ...state, name: action.payload };
      case SET_CODE:
        return { ...state, dptCode: action.payload };
      case RESET_FORM:
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: SET_NAME, payload: e.target.value });
  };

  const handleCodeChange = (e) => {
    dispatch({ type: SET_CODE, payload: e.target.value });
  };

  async function saveDpt(e) {
    e.preventDefault();

    try {
      const formData = { name: state.name, dptCode: state.dptCode, status: 1 };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}department/create`,
        formData
      );
      toast.success("Department Added Successfully");
      refetchData();
      dispatch({ type: RESET_FORM });
    } catch (error) {
      toast.error("Error in Add Department");
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg  p-8">
        <FormHeading title="Department Form" />
        <form onSubmit={saveDpt}>
          <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
            <input
              type="text"
              placeholder="Enter Department Name"
              onChange={handleNameChange}
              value={state.name}
              className="input_sm"
            />
            <input
              type="text"
              placeholder="Enter Department Code"
              onChange={handleCodeChange}
              value={state.dptCode}
              className="input_sm"
            />
            <button type="submit" className="btn_sm_rounded_md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DepartmentForm;
