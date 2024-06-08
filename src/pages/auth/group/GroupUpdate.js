import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function GroupUpdate() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [code, setCode] = useState()

    const navigate = useNavigate()



    useEffect(() => {
        async function getSingleGroup() {
            try {
                const res = await axios.get(`http://localhost:1337/api/v1/group/${id}`)
                setName(res.data.data.name)
                setCode(res.data.data.dptCode)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleGroup()
    }, [id])

    async function saveGroup(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status }
            await axios.put(`http://localhost:1337/api/v1/group/${id}`, customerData)
            navigate("/groups")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Group Form</h2>
            <form onSubmit={saveGroup}>
                <input type="text"
                    placeholder="Enter group Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter group Code"
                    onChange={(e) => setCode(e.target.value)}
                    value={dptCode}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupUpdate