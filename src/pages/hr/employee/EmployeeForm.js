import axios from "axios"
import { useEffect, useState } from "react"


function EmployeeForm({ getEmployeeList }) {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [presentAddress, setPresentAddress] = useState()
    const [permanentAddress, setPermanentAddress] = useState()
    const [dateOfJoining, setDateOfJoining] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [emergencyContactName, setEmergencyContactName] = useState()
    const [emergencyContactNumber1, setEmergencyContactNumber1] = useState()
    const [emergencyContactNumber2, setEmergencyContactNumber2] = useState()
    const [nationalID, setNationalID] = useState()
    const [bankAccount, setBankAccount] = useState()
    const [bankName, setBankName] = useState()
    const [gender, setGender] = useState()
    const [maritalStatus, setMaritalStatus] = useState()
    const [nationality, setNationality] = useState()


    // State to store department
    const [departments, setDepartments] = useState([])
    const [designations, setDesignations] = useState([])
    const [salaryGrades, setSalaryGrades] = useState([])

    const [dptId, setDptID] = useState()
    const [desId, setDesID] = useState()
    const [sgId, setSGID] = useState()


    // Fetch Department list for dropdown list
    async function getDptList() {
        try {

            const res = await axios.get('http://localhost:1337/api/v1/department/list')
            setDepartments(res.data.data)
        } catch (error) {
            console.log("Error Fetching department")
        }
    }

    useEffect(() => {
        getDptList()
    }, [])


    // Fetch Department list for dropdown list
    async function getDesList() {
        try {

            const res = await axios.get('http://localhost:1337/api/v1/designation/list')
            setDesignations(res.data.data)
        } catch (error) {
            console.log("Error Fetching Designation")
        }
    }

    useEffect(() => {
        getDesList()
    }, [])


    // Fetch Department list for dropdown list
    async function getSalaryGradeList() {
        try {

            const res = await axios.get('http://localhost:1337/api/v1/salary-grade/list')
            setSalaryGrades(res.data.data)
        } catch (error) {
            console.log("Error Fetching Designation")
        }
    }

    useEffect(() => {
        getSalaryGradeList()
    }, [])

    async function saveEmployee(e) {
        e.preventDefault()
        try {
            const customerData = {
                fullName, email, phone, present_address: presentAddress, permanent_address: permanentAddress, date_of_joining: dateOfJoining,
                date_of_birth: dateOfBirth, emergency_contact_name: emergencyContactName, emergency_contact_number_1: emergencyContactNumber1,
                emergency_contact_number_2: emergencyContactNumber2, national_id: nationalID, bank_account: bankAccount, bank_name: bankName,
                gender: gender, marital_status: maritalStatus, nationality: nationality,
                status: 1
            }
            await axios.post('http://localhost:1337/api/v1/employee/create', customerData)
            getEmployeeList()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h2>Employee Form</h2>
            <form onSubmit={saveEmployee}>
                <input type="text"
                    placeholder="Enter employee Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />
                <input type="text"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input type="text"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <input type="text"
                    placeholder="Enter Present Address"
                    onChange={(e) => setPresentAddress(e.target.value)}
                    value={presentAddress}
                />
                <input type="text"
                    placeholder="Enter employee Name"
                    onChange={(e) => setPermanentAddress(e.target.value)}
                    value={permanentAddress}
                />
                <input type="date"
                    placeholder="Enter Joining Date"
                    onChange={(e) => setDateOfJoining(e.target.value)}
                    value={dateOfJoining}
                />
                <input type="date"
                    placeholder="Enter Date Of Birth"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                />
                <input type="text"
                    placeholder="Enter Emergency Contact Name"
                    onChange={(e) => setEmergencyContactName(e.target.value)}
                    value={emergencyContactName}
                />
                <input type="text"
                    placeholder="Enter employee Emergency Contact 1"
                    onChange={(e) => setEmergencyContactNumber1(e.target.value)}
                    value={emergencyContactNumber1}
                />
                <input type="text"
                    placeholder="Enter employee Emergency Contact 2"
                    onChange={(e) => setEmergencyContactNumber2(e.target.value)}
                    value={emergencyContactNumber2}
                />
                <input type="text"
                    placeholder="Enter National ID"
                    onChange={(e) => setNationalID(e.target.value)}
                    value={nationalID}
                />
                <input type="text"
                    placeholder="Enter Bank Account"
                    onChange={(e) => setBankAccount(e.target.value)}
                    value={bankAccount}
                />
                <input type="text"
                    placeholder="Enter Bank Name"
                    onChange={(e) => setBankName(e.target.value)}
                    value={bankName}
                />
                <input type="text"
                    placeholder="Enter Gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                />
                <input type="text"
                    placeholder="Enter Marital Status"
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    value={maritalStatus}
                />
                <input type="text"
                    placeholder="Enter Nationality"
                    onChange={(e) => setNationality(e.target.value)}
                    value={nationality}
                />


                <select
                    value={dptId}
                    onChange={(e) => setDptID(e.target.value)}
                    required
                >
                    <option value="">Select Department</option>
                    {departments.map((dpt) => (
                        <option key={dpt._id} value={dpt._id}>{dpt.name}</option>
                    ))}

                </select>

                <select
                    value={desId}
                    onChange={(e) => setDesID(e.target.value)}
                    required
                >
                    <option value="">Select Designation</option>
                    {designations.map((des) => (
                        <option key={des._id} value={des._id} >{des.name}</option>
                    ))}
                </select>

                <select
                    value={sgId}
                    onChange={(e) => setSGID(e.target.value)}
                    required
                >
                    <option value="">Select Salary Grades</option>
                    {salaryGrades.map((des) => (
                        <option key={des._id} value={des._id} >{des.grade_name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form >
        </>
    )
}

export default EmployeeForm