import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function EmployeeDetails() {

    const { id } = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getSingleEmployee()
    }, [id])

    async function getSingleEmployee() {
        try {
            const res = await axios.get(`http://localhost:1337/api/v1/employee/${id}`)
            setEmployee(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }


    async function getPolicyListById() {
        try {

        } catch (error) {
            console.log(error)
        }
    }




    return (<>
        <h1>Employee Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {employee.full_name}</h2>
        <h2>Email: {employee.email}</h2>
        <h2>Phone: {employee.phone}</h2>
        <h2>Status: {employee.status}</h2>
        <h2>Present Address: {employee.present_address}</h2>
        <h2>Permanent Address: {employee.permanent_address}</h2>
        <h2>Emergerncy Contact: {employee.emergency_contact_name}</h2>
        <h2>Emergerncy Contact: {employee.emergency_contact_name}</h2>
        <h2>Emergerncy Contact: {employee.emergency_contact_name}</h2>
        <h2>emergency_contact_number_1: {employee.emergency_contact_number_1}</h2>
        <h2>emergency_contact_number_2: {employee.emergency_contact_number_2}</h2>
        <h2>date_of_birth: {employee.date_of_birth}</h2>
        <h2>date_of_joining: {employee.date_of_joining}</h2>
        <h2>national_id: {employee.national_id}</h2>
        <h2>bank_account: {employee.bank_account}</h2>
        <h2>bank_name: {employee.bank_name}</h2>
        <h2>gender: {employee.gender}</h2>
        <h2>marital_status: {employee.marital_status}</h2>
        <h2>religion: {employee.religion}</h2>
        <h2>blood_group: {employee.blood_group}</h2>
        <h2>religion: {employee.religion}</h2>
        <h2>number_of_children: {employee.number_of_children}</h2>
        <h2>spouse_name: {employee.spouse_name}</h2>
        <h2>spouse_dob: {employee.spouse_dob}</h2>
        <h2>spouse_profession: {employee.spouse_profession}</h2>
        <h2>marriage_date: {employee.marriage_date}</h2>
        <h2>passport_issue_date: {employee.passport_issue_date}</h2>
        <h1>departmentInfo :</h1>
        <h2>Department Name: {employee.department ? employee.department.name : 'Loading...'}</h2>
        <h2>Designation Name: {employee.designation ? employee.designation.name : 'Loading...'}</h2>
        <h2>salaryGradeInfo Name: {employee.salary_grade ? employee.salary_grade.grade_name : 'Not Found'}</h2>
        <h2>salaryGradeInfo Name: {employee.salary_grade ? employee.salary_grade.min_salary : 'Not Found'}</h2>
        <h2>salaryGradeInfo Name: {employee.salary_grade ? employee.salary_grade.max_salary : 'Not Found'}</h2>

    </>)
}

export default EmployeeDetails