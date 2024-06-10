import axios from "axios"
import { useEffect, useState } from "react"


function EmployeeForm({ getEmployeeList }) {

    const initialState = {
        fullName: '',
        email: '',
        phone: '',
        presentAddress: '',
        permanentAddress: '',
        dateOfJoining: '',
        dateOfBirth: '',
        emergencyContactName: '',
        emergencyContactNumber1: '',
        emergencyContactNumber2: '',
        nationalID: '',
        bankAccount: '',
        bankName: '',
        gender: '',
        maritalStatus: '',
        nationality: '',
        religion: '',
        bloodGroup: '',
        numberOfChildren: '',
        spouseName: '',
        spouseDob: '',
        spouseProfession: '',
        marriageDate: '',
        passportIssueDate: '',
        dptId: '',
        desId: '',
        sgId: '',
        checkboxPolicy: []

    }

    // State to store department
    const [formState, setFormState] = useState(initialState)
    const [departments, setDepartments] = useState([])
    const [designations, setDesignations] = useState([])
    const [salaryGrades, setSalaryGrades] = useState([])
    const [policies, setPolicy] = useState([])

    useEffect(() => {
        getDptList()
        getDesList()
        getPolicyList()
        getSalaryGradeList()
    }, [])


    // Fetch Department list for dropdown list
    async function getDptList() {
        try {
            const res = await axios.get('http://localhost:1337/api/v1/department/list')
            setDepartments(res.data.data)
        } catch (error) {
            console.log("Error Fetching department")
        }
    }


    // Fetch Designation list for dropdown list
    async function getDesList() {
        try {
            const res = await axios.get('http://localhost:1337/api/v1/designation/list')
            setDesignations(res.data.data)
        } catch (error) {
            console.log("Error Fetching Designation")
        }
    }


    // Fetch Salary Grade list for dropdown list
    async function getSalaryGradeList() {
        try {

            const res = await axios.get('http://localhost:1337/api/v1/salary-grade/list')
            setSalaryGrades(res.data.data)
        } catch (error) {
            console.log("Error Fetching Designation")
        }
    }


    // Fetch Policy list for dropdown list
    async function getPolicyList() {
        try {

            const res = await axios.get('http://localhost:1337/api/v1/policy/list')
            setPolicy(res.data.data)
        } catch (error) {
            console.log("Error Fetching Designation")
        }
    }

    // Handle Checkbox Change
    const handlePolicyOnChange = (policyID) => {
        setFormState(prevState => {
            const { checkboxPolicy } = prevState
            if (checkboxPolicy.includes(policyID)) {
                return { ...prevState, checkboxPolicy: checkboxPolicy.filter(id => id !== policyID) }
            } else {
                return { ...prevState, checkboxPolicy: [...checkboxPolicy, policyID] }
            }
        })
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState(prevState => ({ ...prevState, [name]: value }))
    }

    async function saveEmployee(e) {
        e.preventDefault()
        try {

            const empData = {
                full_name: formState.fullName, email: formState.email, phone: formState.phone, present_address: formState.presentAddress,
                permanent_address: formState.permanentAddress, date_of_joining: formState.dateOfJoining,
                date_of_birth: formState.dateOfBirth, emergency_contact_name: formState.emergencyContactName, emergency_contact_number_1: formState.emergencyContactNumber1,
                emergency_contact_number_2: formState.emergencyContactNumber2, national_id: formState.nationalID, bank_account: formState.bankAccount, bank_name: formState.bankName,
                gender: formState.gender, marital_status: formState.maritalStatus, nationality: formState.nationality, designation: formState.desId, department: formState.dptId, salary_grade: formState.sgId,
                status: 1, passport_issue_date: formState.passportIssueDate, marriage_date: formState.marriageDate, spouse_profession: formState.spouseProfession,
                spouse_dob: formState.spouseDob, spouse_name: formState.spouseName, number_of_children: formState.numberOfChildren, blood_group: formState.bloodGroup,
                religion: formState.religion
            }

            const saveEmployeeData = await axios.post('http://localhost:1337/api/v1/employee/create', empData)
            const employeeID = saveEmployeeData.data.newEmployee._id

            const policyData = formState.checkboxPolicy.map((policyID) => ({
                employee: employeeID,
                policy: policyID
            }))

            await Promise.all(policyData.map((data) => axios.post('http://localhost:1337/api/v1/employee-policy/create', data)))
            getEmployeeList();

            // Reset form fields
            setFormState(initialState)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h2>Employee Form</h2>
            <form onSubmit={saveEmployee}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text"
                        name="fullName"
                        placeholder="Enter employee Full Name"
                        onChange={handleChange}
                        value={formState.fullName}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        value={formState.email}
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        name="phone"
                        value={formState.phone}
                    />
                </div>
                <div className="form-group">
                    <label>Present Address</label>
                    <input type="text"
                        name="presentAddress"
                        placeholder="Enter Present Address"
                        onChange={handleChange}
                        value={formState.presentAddress}
                    />
                </div>
                <div className="form-group">
                    <label>Permanent Address</label>
                    <input type="text"
                        placeholder="Enter permenet Address"
                        onChange={handleChange}
                        name="permanentAddress"
                        value={formState.permanentAddress}
                    />
                </div>
                <div className="form-group">
                    <label>Date of Joining</label>
                    <input type="date"
                        placeholder="Enter Joining Date"
                        onChange={handleChange}
                        name="dateOfJoining"
                        value={formState.dateOfJoining}
                    />
                </div>

                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date"
                        placeholder="Enter Date Of Birth"
                        onChange={handleChange}
                        name="dateOfBirth"
                        value={formState.dateOfBirth}
                    />
                </div>

                <div className="form-group">
                    <label>Emergency Contact Name</label>
                    <input type="text"
                        placeholder="Enter Emergency Contact Name"
                        onChange={handleChange}
                        name="emergencyContactName"
                        value={formState.emergencyContactName}
                    />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Number 1</label>
                    <input type="text"
                        placeholder="Enter employee Emergency Contact 1"
                        onChange={handleChange}
                        name="emergencyContactNumber1"
                        value={formState.emergencyContactNumber1}
                    />
                </div>

                <div className="form-group">
                    <label>Emergency Contact Number 2</label>
                    <input type="text"
                        placeholder="Enter employee Emergency Contact 2"
                        onChange={handleChange}
                        name="emergencyContactNumber2"
                        value={formState.emergencyContactNumber2}
                    />
                </div>

                <div className="form-group">
                    <label>National ID</label>
                    <input type="text"
                        placeholder="Enter National ID"
                        onChange={handleChange}
                        name="nationalID"
                        value={formState.nationalID}
                    />
                </div>
                <div className="form-group">
                    <label>Bank Account</label>
                    <input type="text"
                        placeholder="Enter Bank Account"
                        onChange={handleChange}
                        name="bankAccount"
                        value={formState.bankAccount}
                    />
                </div>

                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text"
                        placeholder="Enter Bank Name"
                        onChange={handleChange}
                        name="bankName"
                        value={formState.bankName}
                    />
                </div>
                <div className="form-group">
                    <label>Number of Children</label>
                    <input type="number"
                        placeholder="Enter Number Of Children"
                        onChange={handleChange}
                        name="numberOfChildren"
                        value={formState.numberOfChildren}
                    />
                </div>

                <div className="form-group">
                    <label>Spouse Name</label>
                    <input type="text"
                        placeholder="Enter Spouse Name"
                        onChange={handleChange}
                        name="spouseName"
                        value={formState.spouseName}
                    />
                </div>

                <div className="form-group">
                    <label>Spouse DOB</label>
                    <input type="date"
                        placeholder="Enter Spouse DOB"
                        onChange={handleChange}
                        name="spouseDob"
                        value={formState.spouseDob}
                    />
                </div>



                <div className="form-group">
                    <label>Spouse Profession</label>
                    <input type="date"
                        placeholder="Enter Spouse Profession"
                        onChange={handleChange}
                        name="spouseProfession"
                        value={formState.spouseProfession}
                    />
                </div>
                <div className="form-group">
                    <label>Marriage Date</label>
                    <input type="date"
                        placeholder="Enter Marriage Date"
                        onChange={handleChange}
                        name="marriageDate"
                        value={formState.marriageDate}
                    />
                </div>
                <div className="form-group">
                    <label>Passport Issue  Date</label>
                    <input type="date"
                        placeholder="Enter Marriage Date"
                        onChange={handleChange}
                        name="passportIssueDate"
                        value={formState.passportIssueDate}
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select
                        name="gender"
                        value={formState.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Marital Status</label>
                    <select
                        name="maritalStatus"
                        value={formState.maritalStatus}
                        onChange={handleChange}
                    >
                        <option value="">Select Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Blood Group</label>
                    <select
                        value={formState.bloodGroup}
                        onChange={handleChange}
                        name="bloodGroup"
                    >
                        <option value="">Select Blood Group</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Religion</label>
                    <select
                        value={formState.religion}
                        onChange={handleChange}
                        name="religion"
                    >
                        <option value="">Select Religion</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Christan">Christan</option>
                        <option value="Shikh">Shikh</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Nationality</label>
                    <input type="text"
                        name="nationality"
                        placeholder="Enter Nationality"
                        onChange={handleChange}
                        value={formState.nationality}
                    />
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <select
                        value={formState.dptId}
                        onChange={handleChange}
                        required
                        name="dptId"
                    >
                        <option value="">Select Department</option>
                        {departments.map((dpt) => (
                            <option key={dpt._id} value={dpt._id}>{dpt.name}</option>
                        ))}

                    </select>
                </div>

                <div className="form-group">
                    <label>Designation</label>
                    <select
                        value={formState.desId}
                        onChange={handleChange}
                        required
                        name="desId"
                    >
                        <option value="">Select Designation</option>
                        {designations.map((des) => (
                            <option key={des._id} value={des._id} >{des.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Salary Grade</label>
                    <select
                        value={formState.sgId}
                        onChange={handleChange}
                        required
                        name="sgId"
                    >
                        <option value="">Select Salary Grades</option>
                        {salaryGrades.map((des) => (
                            <option key={des._id} value={des._id} >{des.grade_name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Policy</label>
                    {policies.map(pol => (
                        <div key={pol._id}>
                            <label>
                                <input
                                    name="sgId"
                                    type="checkbox"
                                    value={pol._id}
                                    checked={formState.checkboxPolicy.includes(pol._id)}
                                    onChange={() => handlePolicyOnChange(pol._id)}
                                />
                                {pol.name} - {pol.benefit} - {pol.value}
                            </label>
                        </div>
                    ))}
                </div>

                <button type="submit">Submit</button>
            </form >
        </>
    )
}

export default EmployeeForm