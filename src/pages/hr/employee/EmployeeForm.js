import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormSectionHeading from "../../../components/FormSectionHeading";
import FormValidationErrorMsg from "./../../../components/FormValidationErrorMsg";
import usePaginationData from "../../../hooks/usePaginationData";

function EmployeeForm() {
  const initialState = {
    employeeID: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    presentAddress: "",
    permanentAddress: "",
    dateOfJoining: "",
    dateOfBirth: "",
    emergencyContactName: "",
    emergencyContactNumber1: "",
    emergencyContactNumber2: "",
    nationalID: "",
    bankAccount: "",
    bankName: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    religion: "",
    bloodGroup: "",
    numberOfChildren: "",
    spouseName: "",
    spouseDob: "",
    spouseProfession: "",
    marriageDate: "",
    passportIssueDate: "",
    dptId: "",
    desId: "",
    sgId: "",
    checkboxPolicy: [],
    document_name: "",
    longdescription: "",
    shortdescription: "",
    document_link: "",
    document_type: "",
    issued_date: "",
    expiry_date: "",
    basic: 0,
    houseRent: 0,
    medicalAllowance: 0,
    specialAllowance: 0,
    totalLeave: 0,
    totalLeave1: 0,
    totalLeave2: 0,
    totalLeave3: 0,
    leaveTypeId1: "",
    leaveTypeId2: "",
    leaveID3: "",
  };


  const [formState, setFormState] = useState(initialState);

  // Expand
  const [expandedEmployeeInfo, setExpandedEmployeeInfo] = useState(true);
  const [expandedSpouseChildren, setExpandedSpouseChildren] = useState(true);
  const [address, setAddress] = useState(true);
  const [contacts, setContacts] = useState(true);
  const [beximcoRelatedData, setBexiocoRelatedData] = useState(true);
  const [policyRelatedData, setPolicyRelatedData] = useState(true);
  const [documentRelatedData, setDocumentRelatedData] = useState(true);
  const [salaryRelatedData, setSalaryRelatedData] = useState(true);
  const [leaveRelatedData, setLeaveRelatedData] = useState(true);

  const [errorMsg, setErrorMsg] = useState([]);

  const toggleEmployeeInfo = () => {
    setExpandedEmployeeInfo(!expandedEmployeeInfo);
  };

  const toggleSpouseChildren = () => {
    setExpandedSpouseChildren(!expandedSpouseChildren);
  };

  const toggleAddress = () => {
    setAddress(!address);
  };

  const toggleContact = () => {
    setContacts(!contacts);
  };

  const toggleBeximcoRelatedData = () => {
    setBexiocoRelatedData(!beximcoRelatedData);
  };

  const togglePolicyRelatedData = () => {
    setPolicyRelatedData(!policyRelatedData);
  };

  const toggledocumentRelatedData = () => {
    setDocumentRelatedData(!documentRelatedData);
  };

  const toggleSalaryRelatedData = () => {
    setSalaryRelatedData(!salaryRelatedData);
  };

  const toggleLeaveRelatedData = () => {
    setLeaveRelatedData(!leaveRelatedData);
  };

  const { data: departments } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}department/list`
  );

  const { data: designations } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}designation/list`
  );
  const { data: salaryGrades } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}salary-grade/list`
  );
  const { data: policies } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}policy/list`
  );
  const { data: leaveTypes } = usePaginationData(
    `${process.env.REACT_APP_BACKEND_URL}leave-type/list`
  );



  // Handle Checkbox Change
  const handlePolicyOnChange = (policyID) => {
    setFormState((prevState) => {
      const { checkboxPolicy } = prevState;
      if (checkboxPolicy.includes(policyID)) {
        return {
          ...prevState,
          checkboxPolicy: checkboxPolicy.filter((id) => id !== policyID),
        };
      } else {
        return { ...prevState, checkboxPolicy: [...checkboxPolicy, policyID] };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  async function saveEmployee(e) {
    e.preventDefault();
    try {
      const empData = {
        employeeID: formState.employeeID,
        full_name: formState.fullName,
        father_name: formState.fatherName,
        mother_name: formState.motherName,
        email: formState.email,
        phone: formState.phone,
        present_address: formState.presentAddress,
        permanent_address: formState.permanentAddress,
        date_of_joining: formState.dateOfJoining,
        date_of_birth: formState.dateOfBirth,
        emergency_contact_name: formState.emergencyContactName,
        emergency_contact_number_1: formState.emergencyContactNumber1,
        emergency_contact_number_2: formState.emergencyContactNumber2,
        national_id: formState.nationalID,
        bank_account: formState.bankAccount,
        bank_name: formState.bankName,
        gender: formState.gender,
        marital_status: formState.maritalStatus,
        nationality: formState.nationality,
        designation: formState.desId,
        department: formState.dptId,
        salary_grade: formState.sgId,
        status: 1,
        passport_issue_date: formState.passportIssueDate,
        marriage_date: formState.marriageDate,
        spouse_profession: formState.spouseProfession,
        spouse_dob: formState.spouseDob,
        spouse_name: formState.spouseName,
        number_of_children: formState.numberOfChildren,
        blood_group: formState.bloodGroup,
        religion: formState.religion,
      };

      const saveEmployeeData = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}employee/create`,
        empData
      );
      const employeeID = saveEmployeeData.data.newEmployee._id;
      const policyData = formState.checkboxPolicy.map((policyID) => ({
        employee: employeeID,
        policy: policyID,
      }));

      // Add Data Employee Policy Table
      await Promise.all(
        policyData.map((data) =>
          axios.post(
            `${process.env.REACT_APP_BACKEND_URL}employee-policy/create`,
            data
          )
        )
      );
      const documentData = {
        document_name: formState.document_name,
        longdescription: formState.longdescription,
        shortdescription: formState.shortdescription,
        document_link: formState.document_link,
        document_type: formState.document_type,
        issued_date: formState.issued_date,
        expiry_date: formState.expiry_date,
        status: 1,
      };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}document/create`,
        documentData
      );

      // salary added for employee
      const salaryData = {
        employee: employeeID,
        basic: formState.basic,
        houseRent: formState.houseRent,
        medicalAllowance: formState.medicalAllowance,
        specialAllowance: formState.specialAllowance,
      };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}employee-salary/create`,
        salaryData
      );

      // Leave data 1 added
      const leaveData1 = {
        employee: employeeID,
        leaveType: formState.leaveTypeId1,
        totalLeave: formState.totalLeave1,
        totalLeaveTaken: 0,
        leaveBalance: formState.totalLeave1,
        leavePending: 0,
      };

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}employee-leave-balance/create`,
        leaveData1
      );
      // Leave data 2 added
      const leaveData2 = {
        employee: employeeID,
        leaveType: formState.leaveTypeId2,
        totalLeave: formState.totalLeave2,
        totalLeaveTaken: 0,
        leaveBalance: formState.totalLeave2,
        leavePending: 0,
      };

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}employee-leave-balance/create`,
        leaveData2
      );

      // Leave data 3 added
      const leaveData3 = {
        employee: employeeID,
        leaveType: formState.leaveID3,
        totalLeave: formState.totalLeave3,
        totalLeaveTaken: 0,
        leaveBalance: formState.totalLeave3,
        leavePending: 0,
      };

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}employee-leave-balance/create`,
        leaveData3
      );

      // Reset form fields
      toast.success("Employee Saved Successfully");
      setFormState(initialState);
    } catch (error) {
      toast.error("Error While Add Employee");
      setErrorMsg(error.response.data.error);
    }
  }

  return (
    <>
      <div className="mx-auto p-2">
        <form
          onSubmit={saveEmployee}
          className="bg-white shadow-lg p-6 rounded-lg "
        >
          {/*  */}
          <div>
            {/* Employee Info Start*/}
            <div className="cursor-pointer" onClick={toggleEmployeeInfo}>
              <FormSectionHeading title="Employee Info" />
            </div>
            {expandedEmployeeInfo && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div>
                  <label className="text-sm pb-1">Employee ID</label>
                  <input
                    type="text"
                    placeholder="Enter Employee ID"
                    className="input_sm"
                    name="employeeID"
                    onChange={handleChange}
                    value={formState.employeeID}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"employeeID"}
                  />
                </div>
                <div>
                  <label className="text-sm pb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="input_sm"
                    name="fullName"
                    onChange={handleChange}
                    value={formState.fullName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"full_name"}
                  />
                </div>
                <div>
                  <label className="text-sm pb-1">Father Name</label>
                  <input
                    type="text"
                    placeholder="Enter Father Name"
                    className="input_sm"
                    name="fatherName"
                    onChange={handleChange}
                    value={formState.fatherName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"father_name"}
                  />
                </div>
                <div>
                  <label className="text-sm pb-1">Mother Name</label>
                  <input
                    type="text"
                    placeholder="Enter Mother Name"
                    className="input_sm"
                    name="motherName"
                    onChange={handleChange}
                    value={formState.motherName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"mother_name"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">National ID</label>
                  <input
                    type="text"
                    placeholder="Enter National ID"
                    onChange={handleChange}
                    name="nationalID"
                    className="input_sm"
                    value={formState.nationalID}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"national_id"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Date Of Birth</label>
                  <input
                    type="date"
                    placeholder="Enter Date Of Birth"
                    onChange={handleChange}
                    className="input_sm"
                    name="dateOfBirth"
                    value={formState.dateOfBirth}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"date_of_birth"}
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
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"marital_status"}
                  />
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
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"religion"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    placeholder="Enter Nationality"
                    onChange={handleChange}
                    className="input_sm"
                    value={formState.nationality}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"nationality"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Bank Account</label>
                  <input
                    type="text"
                    placeholder="Enter Bank Account"
                    onChange={handleChange}
                    name="bankAccount"
                    value={formState.bankAccount}
                    className="input_sm"
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"bank_account"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Bank Name</label>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    onChange={handleChange}
                    className="input_sm"
                    name="bankName"
                    value={formState.bankName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"bank_name"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Passport Issue Date</label>
                  <input
                    type="date"
                    placeholder="Enter Marriage Date"
                    onChange={handleChange}
                    className="input_sm"
                    name="passportIssueDate"
                    value={formState.passportIssueDate}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"passport_issue_date"}
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
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"blood_group"}
                  />
                </div>
              </div>
            )}
            {/* Employee Info End*/}

            {/* Spouse and Children Section Start */}
            <div className="cursor-pointer" onClick={toggleSpouseChildren}>
              <FormSectionHeading title="Spouse and Children" />
            </div>
            {expandedSpouseChildren && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div className="form-group">
                  <label className="text-sm pb-1">Number of Children</label>
                  <input
                    type="number"
                    placeholder="Enter Number Of Children"
                    onChange={handleChange}
                    className="input_sm"
                    name="numberOfChildren"
                    value={formState.numberOfChildren}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"number_of_children"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Spouse Name</label>
                  <input
                    type="text"
                    placeholder="Enter Spouse Name"
                    onChange={handleChange}
                    className="input_sm"
                    name="spouseName"
                    value={formState.spouseName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"spouse_name"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Spouse DOB</label>
                  <input
                    type="date"
                    placeholder="Enter Spouse DOB"
                    onChange={handleChange}
                    name="spouseDob"
                    className="input_sm"
                    value={formState.spouseDob}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"spouse_dob"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Spouse Profession</label>
                  <input
                    type="text"
                    placeholder="Enter Spouse Profession"
                    onChange={handleChange}
                    className="input_sm"
                    name="spouseProfession"
                    value={formState.spouseProfession}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"spouse_profession"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Marriage Date</label>
                  <input
                    type="date"
                    placeholder="Enter Marriage Date"
                    onChange={handleChange}
                    name="marriageDate"
                    className="input_sm"
                    value={formState.marriageDate}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"marriage_date"}
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
                  <textarea
                    type="text"
                    name="presentAddress"
                    placeholder="Enter Present Address"
                    onChange={handleChange}
                    className="input_sm"
                    value={formState.presentAddress}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"present_address"}
                  />
                </div>
                <div className="form-group w-full">
                  <label className="text-sm pb-1">Permanent Address</label>
                  <textarea
                    type="text"
                    placeholder="Enter permenet Address"
                    onChange={handleChange}
                    className="input_sm h-24"
                    name="permanentAddress"
                    value={formState.permanentAddress}
                    rows="4"
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"permanent_address"}
                  />
                </div>
              </div>
            )}

            {/*Address Form End  */}
            <div className="cursor-pointer" onClick={toggleContact}>
              <FormSectionHeading title="Contacts" />
            </div>
            {contacts && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div>
                  <label className="text-sm pb-1">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="input_sm"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={formState.email}
                  />
                  <FormValidationErrorMsg errorMsg={errorMsg} label={"email"} />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    onChange={handleChange}
                    name="phone"
                    className="input_sm"
                    value={formState.phone}
                  />
                  <FormValidationErrorMsg errorMsg={errorMsg} label={"phone"} />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Emergency Contact Name</label>
                  <input
                    type="text"
                    placeholder="Enter Emergency Contact Name"
                    onChange={handleChange}
                    className="input_sm"
                    name="emergencyContactName"
                    value={formState.emergencyContactName}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"emergency_contact_name"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">
                    Emergency Contact Number 1
                  </label>
                  <input
                    type="text"
                    placeholder="Enter employee Emergency Contact 1"
                    onChange={handleChange}
                    className="input_sm"
                    name="emergencyContactNumber1"
                    value={formState.emergencyContactNumber1}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"emergency_contact_number_1"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">
                    Emergency Contact Number 2
                  </label>
                  <input
                    type="text"
                    placeholder="Enter employee Emergency Contact 2"
                    onChange={handleChange}
                    className="input_sm"
                    name="emergencyContactNumber2"
                    value={formState.emergencyContactNumber2}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"emergency_contact_number_2"}
                  />
                </div>
              </div>
            )}
            {/* Address Form End */}

            {/* Beximco Related Data Start */}
            <div className="cursor-pointer" onClick={toggleBeximcoRelatedData}>
              <FormSectionHeading title="Beximco Related Data" />
            </div>
            {beximcoRelatedData && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div className="form-group">
                  <label className="text-sm pb-1">Date of Joining</label>
                  <input
                    type="date"
                    placeholder="Enter Joining Date"
                    onChange={handleChange}
                    className="input_sm"
                    name="dateOfJoining"
                    value={formState.dateOfJoining}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"date_of_joining"}
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
                        <option key={dpt._id} value={dpt._id}>
                          {dpt.name}
                        </option>
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
                        <option key={des._id} value={des._id}>
                          {des.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Salary Grade</label>
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
                        <option key={des._id} value={des._id}>
                          {des.grade_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Beximco Policy For Employee Form Start */}
            <div className="cursor-pointer" onClick={togglePolicyRelatedData}>
              <FormSectionHeading title="Beximco Policy For Employee" />
            </div>
            {policyRelatedData && (
              <div className="form-group">
                {policies.map((pol) => (
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
            )}
            {/* Beximco Policy For Employee Form End */}
            {/* Document Info Start */}
            <div
              className="cursor-pointer mt-4"
              onClick={toggledocumentRelatedData}
            >
              <FormSectionHeading title="Document Info" />
            </div>
            {documentRelatedData && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div className="form-group">
                  <label className="text-sm pb-1">Document Name</label>
                  <input
                    type="text"
                    placeholder="Enter Document Name"
                    onChange={handleChange}
                    className="input_sm"
                    name="document_name"
                    value={formState.document_name}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"document_name"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">
                    Document Long Description
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Document Long Description"
                    onChange={handleChange}
                    className="input_sm"
                    name="longdescription"
                    value={formState.longdescription}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"longdescription"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">
                    Document short description
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Document Short Description"
                    onChange={handleChange}
                    className="input_sm"
                    name="shortdescription"
                    value={formState.shortdescription}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"shortdescription"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">
                    Document short description
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Document Link"
                    onChange={handleChange}
                    className="input_sm"
                    name="document_link"
                    value={formState.document_link}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"document_link"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Document Issue Date</label>
                  <input
                    type="date"
                    placeholder="Enter Document Issue Date"
                    onChange={handleChange}
                    className="input_sm"
                    name="issued_date"
                    value={formState.issued_date}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"issued_date"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Document Expiry Date</label>
                  <input
                    type="date"
                    placeholder="Enter Document Expiry Date"
                    onChange={handleChange}
                    className="input_sm"
                    name="expiry_date"
                    value={formState.expiry_date}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"expiry_date"}
                  />
                </div>

                <div className="form-group">
                  <label className="text-sm pb-1">Document Type</label>

                  <div class="select relative flex items-center border py-2 rounded-lg">
                    <div class="absolute right-4">
                      <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                    </div>
                    <select
                      value={formState.document_type}
                      onChange={handleChange}
                      required
                      name="document_type"
                      class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                    >
                      <option value="">Select Document Type</option>
                      <option value="Resume">Resume</option>
                      <option value="Certificate">Certificate</option>
                      <option value="CoverLetter">CoverLetter</option>
                      <option value="NID">NID</option>
                      <option value="TIN">TIN</option>
                      <option value="BirthCertificate">BirthCertificate</option>
                      <option value="CompanyPDF">CompanyPDF</option>
                      <option value="SOP">SOP</option>
                      <option value="CompanyAnnouncement">
                        CompanyAnnouncement
                      </option>
                    </select>
                  </div>
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"document_type"}
                  />
                </div>
              </div>
            )}
            {/* Document Info Form End */}

            <div
              className="cursor-pointer mt-4"
              onClick={toggleSalaryRelatedData}
            >
              <FormSectionHeading title="Salary Info" />
            </div>

            {salaryRelatedData && (
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 my-4 ">
                <div className="form-group">
                  <label className="text-sm pb-1">Basic</label>
                  <input
                    type="number"
                    placeholder="Enter Basic"
                    onChange={handleChange}
                    className="input_sm"
                    name="basic"
                    value={formState.basic}
                  />
                  <FormValidationErrorMsg errorMsg={errorMsg} label={"basic"} />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">House Rent</label>
                  <input
                    type="number"
                    placeholder="Enter House Rent"
                    onChange={handleChange}
                    className="input_sm"
                    name="houseRent"
                    value={formState.houseRent}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"houseRent"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Medical Allowance</label>
                  <input
                    type="number"
                    placeholder="Enter medical Allowance"
                    onChange={handleChange}
                    className="input_sm"
                    name="medicalAllowance"
                    value={formState.medicalAllowance}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"medicalAllowance"}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Special Allowance</label>
                  <input
                    type="number"
                    placeholder="Enter special Allowance"
                    onChange={handleChange}
                    className="input_sm"
                    name="specialAllowance"
                    value={formState.specialAllowance}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"specialAllowance"}
                  />
                </div>
              </div>
            )}

            <div
              className="cursor-pointer mt-4"
              onClick={toggleLeaveRelatedData}
            >
              <FormSectionHeading title="Employee Leave" />
            </div>
            {leaveRelatedData && (

              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-6 my-4 ">
                <div className="form-group">
                  <label className="text-sm pb-1">Leave Data</label>
                  <div class="select relative flex items-center border py-2 rounded-lg">
                    <div class="absolute right-4">
                      <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                    </div>
                    <select
                      class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                      value={formState.leaveTypeId1}
                      onChange={handleChange}
                      required
                      name="leaveTypeId1"
                    >
                      <option value="">Select Leave Type</option>
                      {leaveTypes.map((lti) => (
                        <option key={lti._id} value={lti._id}>
                          {lti.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Total Leave</label>
                  <input
                    type="number"
                    placeholder="Enter special Allowance"
                    onChange={handleChange}
                    className="input_sm"
                    name="totalLeave1"
                    value={formState.totalLeave1}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"totalLeave"}
                  />
                </div>
                {/* type : 2 */}

                <div className="form-group">
                  <label className="text-sm pb-1">Salary Grade</label>
                  <div class="select relative flex items-center border py-2 rounded-lg">
                    <div class="absolute right-4">
                      <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                    </div>
                    <select
                      class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                      value={formState.leaveTypeId2}
                      onChange={handleChange}
                      required
                      name="leaveTypeId2"
                    >
                      <option value="">Select Leave Type</option>
                      {leaveTypes.map((lti) => (
                        <option key={lti._id} value={lti._id}>
                          {lti.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Total Leave</label>
                  <input
                    type="number"
                    placeholder="Enter special Allowance"
                    onChange={handleChange}
                    className="input_sm"
                    name="totalLeave2"
                    value={formState.totalLeave2}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"totalLeave"}
                  />
                </div>

                {/* type : 3 */}

                <div className="form-group">
                  <label className="text-sm pb-1">Salary Grade</label>
                  <div class="select relative flex items-center border py-2 rounded-lg">
                    <div class="absolute right-4">
                      <i class="ri-arrow-down-s-line text-[26px] text-primary"></i>
                    </div>
                    <select
                      class="appearance-none outline-none h-full w-full bg-transparent px-4 text-sm"
                      value={formState.leaveID3}
                      onChange={handleChange}
                      required
                      name="leaveID3"
                    >
                      <option value="">Select Leave Type</option>
                      {leaveTypes.map((lti) => (
                        <option key={lti._id} value={lti._id}>
                          {lti.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-sm pb-1">Total Leave</label>
                  <input
                    type="number"
                    placeholder="Enter Total Leave"
                    onChange={handleChange}
                    className="input_sm"
                    name="totalLeave3"
                    value={formState.totalLeave3}
                  />
                  <FormValidationErrorMsg
                    errorMsg={errorMsg}
                    label={"totalLeave"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="text-center">
            <button type="submit" className="btn_sm mt-5 w-[200px]">
              Submit
            </button>
          </div>
        </form >
      </div >
    </>
  );
}

export default EmployeeForm;
