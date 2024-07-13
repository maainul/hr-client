import axios from "axios"
import { useEffect, useState } from "react"
import SalaryGradeForm from "./SalaryGradeForm"
import SalaryGradeList from "./SalaryGradeList"

function SalaryGrades() {

    const [salaryGrades, setSalaryGrades] = useState([])

    async function getSalaryGradeList() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}salary-grade/list`)
            setSalaryGrades(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSalaryGradeList()
    }, [])



    return (
        <>
            <SalaryGradeForm getSalaryGradeList={getSalaryGradeList} />
            <SalaryGradeList salaryGrades={salaryGrades} />
        </>
    )
}

export default SalaryGrades
