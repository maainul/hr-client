import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"


function SalaryGradeDetails() {

    const { id } = useParams()
    const [salaryGrade, setSalaryGrade] = useState({})

    useEffect(() => {
        async function getSingleSalaryGrade() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/salary-grade/${id}`)
                setSalaryGrade(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleSalaryGrade()
    }, [id])

    return (<>
        <h1>SalaryGrade Details</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {salaryGrade.grade_name}</h2>
        <h2>Min: {salaryGrade.min_salary}</h2>
        <h2>MAX: {salaryGrade.max_salary}</h2>
        <h2>Status: {salaryGrade.status}</h2>
    </>)
}

export default SalaryGradeDetails