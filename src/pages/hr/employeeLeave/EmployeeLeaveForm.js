import axios from "axios"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import FormHeading from "../../../components/FormHeading";
import FormValidationErrorMsg from "../../../components/FormValidationErrorMsg";


function EmployeeLeaveForm() {
    const initialState = {
        employee: '',
        leaveType: '',
        start_date: '',
        end_date: '',
        numberOfDays: '',
        superVisiorStatus: '',
        dptHeadStatus: '',
        HRStatus: '',
        dptHeadEmail: '',
        supervisorEmail: '',
        purpose: ''
    }

    // Expand 
    const [errorMsg, setErrorMsg] = useState([])
    const [formState, setFormState] = useState(initialState)
    const [employees, setEmployee] = useState([])
    const [leaveTypes, setLeaveType] = useState([])

    useEffect(() => {
        getEmpList()
        getLeaveTypeList()
    }, [])

    // Fetch Employee list for dropdown list
    async function getEmpList() {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}employee/list`
            );
            setEmployee(res.data.data)
        } catch (error) {
            console.log("Error Fetching department")
        }
    }


    // Fetch leave list for dropdown list
    async function getLeaveTypeList() {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}leave-type/list`
            );
            setLeaveType(res.data.data)
        } catch (error) {
            console.log("Error Fetching department")
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState(prevState => ({ ...prevState, [name]: value }))
    }

    async function saveEmployeeLeave(e) {
        e.preventDefault()
        try {

            const empLeave = {
                employee: formState.employee,
                leaveType: formState.leaveType,
                start_date: formState.start_date,
                end_date: formState.end_date,
                numberOfDays: formState.numberOfDays,
                purpose: formState.purpose,
                supervisorEmail: formState.supervisorEmail,
                dptHeadEmail: formState.dptHeadEmail
            }
            const res = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}employee-leave/create`,
                empLeave
            );
            console.log(res)
            toast.success('Employee leave added Saved Successfully')
            setFormState(initialState)

        } catch (error) {
            console.log(error.response.data.error)
            toast.error('Error While Add Employee Leave')
            setErrorMsg(error.response.data.error)
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg  p-8 rounded-lg">
                <FormHeading title="Employee Leave Form" />
                <form onSubmit={saveEmployeeLeave}>
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="pt-2">
                                <label className="text-sm">Start Date</label>
                                <input type="date"
                                    placeholder="Enter Start Date"
                                    onChange={handleChange}
                                    value={formState.start_date}
                                    className="input_sm"
                                    name="start_date"
                                />
                                <FormValidationErrorMsg errorMsg={errorMsg} label={'employeeID'} />
                            </div>
                            <div className="pt-2">
                                <label className="text-sm">End Date</label>
                                <input type="date"
                                    placeholder="Enter End Date"
                                    onChange={handleChange}
                                    value={formState.end_date}
                                    className="input_sm"
                                    name="end_date"
                                />
                            </div>
                        </div>
                        <div className="pt-2">
                            <label className="text-sm">Number Of Days</label>
                            <input type="number"
                                placeholder="Enter Number Of Days"
                                onChange={handleChange}
                                value={formState.numberOfDays}
                                className="input_sm"
                                name="numberOfDays"
                            />
                        </div>
                        <div className="pt-2">
                            <label className="text-sm pb-1">Employee</label>
                            <div class="select relative flex items-center border py-2 rounded-lg">
                                <div class="absolute right-4">
                                    <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                </div>
                                <select
                                    class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                    value={formState.employee}
                                    onChange={handleChange}
                                    // required
                                    name="employee"
                                >
                                    <option value="">Select Employee</option>
                                    {employees.map((emp) => (
                                        <option key={emp._id} value={emp._id}>{emp.employeeID}-{emp.full_name}</option>

                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="pt-2">
                            <label className="text-sm pb-1">Leave Type</label>
                            <div class="select relative flex items-center border py-2 rounded-lg">
                                <div class="absolute right-4">
                                    <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                </div>
                                <select
                                    class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                    value={formState.leaveType}
                                    onChange={handleChange}
                                    // required
                                    name="leaveType"
                                >
                                    <option value="">Select Leave Type</option>
                                    {leaveTypes.map((emp) => (
                                        <option key={emp._id} value={emp._id}>{emp.name}-{emp.leave_limit}</option>
                                    ))}
                                </select>

                            </div>
                        </div>

                        <div className="pt-2">
                            <label className="text-sm">Supervior Email</label>
                            <input type="text"
                                placeholder="Enter Supervior Email"
                                onChange={handleChange}
                                value={formState.supervisorEmail}
                                className="input_sm"
                                name="supervisorEmail"
                            />
                        </div>

                        <div className="pt-2">
                            <label className="text-sm">Department Head Email</label>
                            <input type="text"
                                placeholder="Enter Department Head Email"
                                onChange={handleChange}
                                value={formState.dptHeadEmail}
                                className="input_sm"
                                name="dptHeadEmail"
                            />
                        </div>

                        <div className="pt-2">
                            <label className="text-sm">Leave Purpose</label>
                            <textarea type="text"
                                placeholder="Enter Leave Purpose"
                                onChange={handleChange}
                                value={formState.purpose}
                                className="input_sm"
                                name="purpose"
                            />
                        </div>
                    </div>
                    <div className="justify-center flex">
                        <button type="submit" className="btn_sm_rounded_md mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmployeeLeaveForm