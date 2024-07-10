import axios from "axios"
import { useState } from "react"
import FormHeading from "../../../components/FormHeading"


function DepartmentForm({ getDepartmentList }) {

    const [name, setName] = useState()
    const [dptCode, setDptCode] = useState()


    async function saveDepartment(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status: 1 }
            await axios.post('http://localhost:1337/api/v1/department/create', customerData)
            getDepartmentList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg  p-8 rounded-lg">
                <FormHeading title="Department Form" />
                <form onSubmit={saveDepartment}>
                    <div className="flex flex-col lg:flex-row  w-full gap-y-4 lg:gap-x-4 justify-between">
                        <input type="text"
                            placeholder="Enter department Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="input_sm"
                        />
                        <input type="text"
                            placeholder="Enter department Code"
                            onChange={(e) => setDptCode(e.target.value)}
                            value={dptCode}
                            className="input_sm"
                        />
                        <button type="submit" className="btn_sm_rounded_md">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DepartmentForm