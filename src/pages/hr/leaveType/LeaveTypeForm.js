import axios from "axios"
import { useState } from "react"
import FormHeading from "../../../components/FormHeading"
import { toast } from "react-toastify"


function LeaveTypeForm({ getLeaveTypeList }) {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [leave_limit, setLeaveLimit] = useState()


    async function saveLeaveType(e) {
        e.preventDefault()
        try {
            const ld = { name, description, leave_limit }
            await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}leave-type/create`,
                ld
            );
            toast.success('LeaveType Added Successfully')
            getLeaveTypeList()

        } catch (error) {
            toast.success('Error in Add LeaveType')
            console.log(error)
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg  p-8 rounded-lg">
                <FormHeading title="LeaveType Form" />
                <form onSubmit={saveLeaveType}>
                    <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
                        <input type="text"
                            placeholder="Enter leaveType Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="input_sm"
                        />
                        <input type="text"
                            placeholder="Enter description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="input_sm"
                        />
                        <input type="text"
                            placeholder="Enter leave limit"
                            onChange={(e) => setLeaveLimit(e.target.value)}
                            value={leave_limit}
                            className="input_sm"
                        />
                        <button type="submit" className="btn_sm_rounded_md">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LeaveTypeForm