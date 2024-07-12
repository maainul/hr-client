import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import FormSectionHeading from "../../../components/FormSectionHeading"


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
        checkboxPolicy: [],
        documentCode: '',
        documentName: '',
        documentType: '',
        documentLink: ''

    }

    // Expand 
    const [expandedEmployeeInfo, setExpandedEmployeeInfo] = useState(true)
    const [expandedSpouseChildren, setExpandedSpouseChildren] = useState(true)
    const [address, setAddress] = useState(true)
    const [contacts, setContacts] = useState(true)
    const [beximcoRelatedData, setBexiocoRelatedData] = useState(true)


    const toggleEmployeeInfo = () => {
        setExpandedEmployeeInfo(!expandedEmployeeInfo)
    }

    const toggleSpouseChildren = () => {
        setExpandedSpouseChildren(!expandedSpouseChildren)
    }

    const toggleAddress = () => {
        setAddress(!address)
    }

    const toggleContact = () => {
        setContacts(!contacts)
    }

    const toggleBeximcoRelatedData = () => {
        setBexiocoRelatedData(!beximcoRelatedData)
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
                religion: formState.religion,
                //document_code: formState.documentCode, document_name: formState.documentName, documentLink: formState.documentLink,
                //document_type: formState.documentType
            }

            const saveEmployeeData = await axios.post('http://localhost:1337/api/v1/employee/create', empData)
            const employeeID = saveEmployeeData.data.newEmployee._id
            console.log("saved empolyee ==>", saveEmployeeData.data)
            console.log("saved empolyee ==>", employeeID)
            // const policyData = formState.checkboxPolicy.map((policyID) => ({
            //     employee: employeeID,
            //     policy: policyID
            // }))

            // Add Data Employee Policy Table
            //await Promise.all(policyData.map((data) => axios.post('http://localhost:1337/api/v1/employee-policy/create', data)))

            // Add Data in Document Table
            //getEmployeeList();

            // Reset form fields
            toast.success('Employee Saved Successfully')
            setFormState(initialState)

        } catch (error) {
            toast.error('Error While Add Employee')
            console.log(error)
        }
    }

    return (
        <>
            <div className="mx-auto p-2">
                <form onSubmit={saveEmployee} className="bg-white shadow-lg p-6 rounded-lg ">
                    {/*  */}
                    <div>
                        {/* Employee Info Start*/}
                        <div className="cursor-pointer" onClick={toggleEmployeeInfo}>
                            <FormSectionHeading title="Employee Info" />
                        </div>
                        {expandedEmployeeInfo && (
                            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 my-4 ">
                                <div>
                                    <label className="text-sm pb-1">Full Name</label>
                                    <input
                                        type='text'
                                        placeholder="User ID"
                                        className="input_sm"
                                        name="fullName"
                                        onChange={handleChange}
                                        value={formState.fullName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">National ID</label>
                                    <input type="text"
                                        placeholder="Enter National ID"
                                        onChange={handleChange}
                                        name="nationalID"
                                        className="input_sm"
                                        value={formState.nationalID}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Date Of Birth</label>
                                    <input type="date"
                                        placeholder="Enter Date Of Birth"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="dateOfBirth"
                                        value={formState.dateOfBirth}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Gender</label>
                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>
                                        <select
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                            value={formState.gender}
                                            onChange={handleChange}
                                            required
                                            name="gender"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Marital Status</label>

                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>
                                        <select
                                            name="maritalStatus"
                                            value={formState.maritalStatus}
                                            onChange={handleChange}
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                        >
                                            <option value="">Select Marital Status</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Religion</label>
                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>

                                        <select
                                            value={formState.religion}
                                            onChange={handleChange}
                                            name="religion"
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                        >
                                            <option value="">Select Religion</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Christan">Christan</option>
                                            <option value="Shikh">Shikh</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Nationality</label>
                                    <input type="text"
                                        name="nationality"
                                        placeholder="Enter Nationality"
                                        onChange={handleChange}
                                        className="input_sm"
                                        value={formState.nationality}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Bank Account</label>
                                    <input type="text"
                                        placeholder="Enter Bank Account"
                                        onChange={handleChange}
                                        name="bankAccount"
                                        value={formState.bankAccount}
                                        className="input_sm"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Bank Name</label>
                                    <input type="text"
                                        placeholder="Enter Bank Name"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="bankName"
                                        value={formState.bankName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Passport Issue  Date</label>
                                    <input type="date"
                                        placeholder="Enter Marriage Date"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="passportIssueDate"
                                        value={formState.passportIssueDate}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Blood Group</label>

                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>
                                        <select
                                            value={formState.bloodGroup}
                                            onChange={handleChange}
                                            name="bloodGroup"
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                        >
                                            <option value="">Select Blood Group</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Employee Info End*/}

                        {/* Spouse and Children Section Start */}
                        <div className="cursor-pointer" onClick={toggleSpouseChildren}>
                            <FormSectionHeading title="Spouse and Children" />
                        </div>
                        {expandedSpouseChildren && (
                            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 my-4 ">


                                <div className="form-group">
                                    <label className="text-sm pb-1">Number of Children</label>
                                    <input type="number"
                                        placeholder="Enter Number Of Children"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="numberOfChildren"
                                        value={formState.numberOfChildren}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Spouse Name</label>
                                    <input type="text"
                                        placeholder="Enter Spouse Name"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="spouseName"
                                        value={formState.spouseName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Spouse DOB</label>
                                    <input type="date"
                                        placeholder="Enter Spouse DOB"
                                        onChange={handleChange}
                                        name="spouseDob"
                                        className="input_sm"
                                        value={formState.spouseDob}
                                    />
                                </div>



                                <div className="form-group">
                                    <label className="text-sm pb-1">Spouse Profession</label>
                                    <input type="date"
                                        placeholder="Enter Spouse Profession"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="spouseProfession"
                                        value={formState.spouseProfession}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Marriage Date</label>
                                    <input type="date"
                                        placeholder="Enter Marriage Date"
                                        onChange={handleChange}
                                        name="marriageDate"
                                        className="input_sm"
                                        value={formState.marriageDate}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Spouse and Children Section End */}

                        {/*Address Form Start  */}
                        <div className="cursor-pointer" onClick={toggleAddress}>
                            <FormSectionHeading title="Address" />
                        </div>
                        {address && (
                            <div className="lg:flex lg:gap-x-4 my-4">
                                <div className="form-group w-full">
                                    <label className="text-sm pb-1">Present Address</label>
                                    <textarea type="text"
                                        name="presentAddress"
                                        placeholder="Enter Present Address"
                                        onChange={handleChange}
                                        className="input_sm"
                                        value={formState.presentAddress}
                                    />
                                </div>
                                <div className="form-group w-full">
                                    <label className="text-sm pb-1">Permanent Address</label>
                                    <textarea type="text"
                                        placeholder="Enter permenet Address"
                                        onChange={handleChange} className="input_sm h-24"
                                        name="permanentAddress"
                                        value={formState.permanentAddress}
                                        rows="4"
                                    />
                                </div>

                            </div>
                        )}
                        {/*Address Form End  */}
                        <div className="cursor-pointer" onClick={toggleContact}>
                            <FormSectionHeading title="Contacts" />
                        </div>
                        {contacts && (
                            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 my-4 ">
                                <div>
                                    <label className="text-sm pb-1">Email</label>
                                    <input type="text"
                                        name="email"
                                        className="input_sm"
                                        placeholder="Enter Email"
                                        onChange={handleChange}
                                        value={formState.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Phone Number</label>
                                    <input type="text"
                                        placeholder="Enter Phone Number"
                                        onChange={handleChange}
                                        name="phone"
                                        className="input_sm"
                                        value={formState.phone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Emergency Contact Name</label>
                                    <input type="text"
                                        placeholder="Enter Emergency Contact Name"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="emergencyContactName"
                                        value={formState.emergencyContactName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-sm pb-1">Emergency Contact Number 1</label>
                                    <input type="text"
                                        placeholder="Enter employee Emergency Contact 1"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="emergencyContactNumber1"
                                        value={formState.emergencyContactNumber1}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Emergency Contact Number 2</label>
                                    <input type="text"
                                        placeholder="Enter employee Emergency Contact 2"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="emergencyContactNumber2"
                                        value={formState.emergencyContactNumber2}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Address Form End */}
                        <div className="cursor-pointer" onClick={toggleBeximcoRelatedData}>
                            <FormSectionHeading title="Beximco Related Data" />
                        </div>
                        {beximcoRelatedData && (
                            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 my-4 ">
                                <div className="form-group">
                                    <label className="text-sm pb-1">Date of Joining</label>
                                    <input type="date"
                                        placeholder="Enter Joining Date"
                                        onChange={handleChange}
                                        className="input_sm"
                                        name="dateOfJoining"
                                        value={formState.dateOfJoining}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Department</label>

                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>

                                        <select
                                            value={formState.dptId}
                                            onChange={handleChange}
                                            required
                                            name="dptId"
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                                        >
                                            <option value="">Select Department</option>
                                            {departments.map((dpt) => (
                                                <option key={dpt._id} value={dpt._id}>{dpt.name}</option>
                                            ))}

                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Designation</label>
                                    <div class="select relative flex items-center border py-2 rounded-lg">
                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>
                                        <select
                                            value={formState.desId}
                                            onChange={handleChange}
                                            required
                                            name="desId"
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"

                                        >
                                            <option value="">Select Designation</option>
                                            {designations.map((des) => (
                                                <option key={des._id} value={des._id} >{des.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="text-sm pb-1">Salary Grade</label>
                                    {/* <div class="select relative flex items-center">
                            <div class="absolute right-4">
                                <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                            </div>
                            <select
                                value={formState.sgId}
                                onChange={handleChange}
                                required
                                name="sgId"
                                className="appearance-none outline-none h-full w-full bg-transparent px-4"
                            >
                                <option value="">Select Salary Grades</option>
                                {salaryGrades.map((des) => (
                                    <option key={des._id} value={des._id} >{des.grade_name}</option>
                                ))}
                            </select>
                        </div> */}

                                    <div class="select relative flex items-center border py-2 rounded-lg">

                                        <div class="absolute right-4">
                                            <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                                        </div>

                                        <select
                                            class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
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
                                </div>

                                {/* <div className="form-group">
                        <label>Policy</label>
                        <div className="select relative flex items-center">
                            {/* icons */}
                                {/* <div className="absolute right-4">
                        <i class="ri-arrow-down-s-line text-[20px] text-primary"></i>
                    </div>

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
            </div> */}
                                {/* </div >  */}


                                {/* <h4>Document Add</h4>
                    <div className="form-group">
                        <label>Document Code</label>
                        <input type="text"
                            placeholder="Enter Document Code"
                            onChange={handleChange}
                            name="documentCode"
                            className="input_sm"
                            value={formState.documentCode}
                        />
                    </div>
                    <div className="form-group">
                        <label>Document Name</label>
                        <input type="text"
                            placeholder="Enter Document Name"
                            onChange={handleChange}
                            name="documentName"
                            className="input_sm"
                            value={formState.documentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Document Link</label>
                        <input type="text"
                            placeholder="Enter Document Link"
                            onChange={handleChange}
                            name="documentLink"
                            className="input_sm"
                            value={formState.documentLink}
                        />
                    </div>
                    <div className="form-group">
                        <label>Document Type</label>
                        <input type="text"
                            placeholder="Enter Document Code"
                            onChange={handleChange}
                            name="documentType"
                            className="input_sm"
                            value={formState.documentType}
                        /> */}
                                {/* </div> */}
                            </div>
                        )}
                    </div>
                    <div className="text-center">

                        <button type="submit" className="btn_sm mt-5 w-[200px]">Submit</button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default EmployeeForm