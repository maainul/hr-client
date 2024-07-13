import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function MenuUpdate() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [dptCode, setDptCode] = useState()
    const [status, setStatus] = useState()

    const navigate = useNavigate()


    // Menu Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSingleMenu() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/${id}`)
                setName(res.data.data.name)
                setDptCode(res.data.data.dptCode)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSingleMenu()
    }, [id])

    async function saveMenu(e) {
        e.preventDefault()
        try {
            const customerData = { name, dptCode, status }
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}menu/${id}`, customerData)
            navigate("/menus")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Menu Form</h2>
            <form onSubmit={saveMenu}>
                <input type="text"
                    placeholder="Enter menu Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter menu Code"
                    onChange={(e) => setDptCode(e.target.value)}
                    value={dptCode}
                />

                <select
                    id="status-select"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                >
                    <option value="" disabled> Select Status</option>
                    {statuses.map((statOption) => (
                        <option key={statOption.code} value={statOption.code}>{statOption.name}</option>
                    ))}

                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MenuUpdate