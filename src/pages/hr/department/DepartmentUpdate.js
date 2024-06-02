import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function DepartmentUpdate() {

    const { id } = useParams()

    //https://www.youtube.com/watch?v=j0KQh07u3Mk&ab_channel=simplyjs

    const [name, setName] = useState()
    const [dptCode, setDptCode] = useState()

    const [department, setDepartment] = useState({})

    useEffect(() => {
        async function getSingleDepartment() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/department/${id}`)
                setDepartment(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleDepartment()
    }, [id])





    async function saveDepartment(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status: 1 }
            await axios.post('http://localhost:1337/api/v1/department/create', customerData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Department Form</h2>
            <form onSubmit={saveDepartment}>
                <input type="text"
                    placeholder="Enter department Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter department Code"
                    onChange={(e) => setDptCode(e.target.value)}
                    value={dptCode}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default DepartmentUpdate