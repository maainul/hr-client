import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function PolicyUpdate() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [benefit, setBenefit] = useState()
    const [value, setValue] = useState()
    const [status, setStatus] = useState()

    const navigate = useNavigate()


    // Policy Status
    const statuses = [
        { code: 0, name: 'Inactive' },
        { code: 1, name: 'Active' },
        { code: 2, name: 'Pending' },
    ]

    useEffect(() => {
        async function getSinglePolicy() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}policy/${id}`)
                setName(res.data.data.name)
                setBenefit(res.data.data.benefit)
                setValue(res.data.data.value)
                setStatus(res.data.data.status)

            } catch (error) {
                console.log(error)
            }
        }
        getSinglePolicy()
    }, [id])

    async function savePolicy(e) {
        e.preventDefault()
        try {
            const customerData = { name, benefit, value, status }
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}policy/${id}`, customerData)
            navigate("/policy")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Update Policy Form</h2>
            <form onSubmit={savePolicy}>
                <input type="text"
                    placeholder="Enter policy Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter policy Code"
                    onChange={(e) => setBenefit(e.target.value)}
                    value={benefit}
                />
                <input type="text"
                    placeholder="Enter policy Code"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
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

export default PolicyUpdate