import axios from "axios"
import { useState } from "react"


function PolicyForm({ getPolicyList }) {

    const [name, setName] = useState()
    const [benefit, setBenefit] = useState()
    const [value, setValue] = useState()


    async function savePolicy(e) {
        e.preventDefault()
        try {
            const customerData = { name, benefit, value, status: 1 }
            await axios.post('http://localhost:1337/api/v1/policy/create', customerData)
            getPolicyList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Policy Form</h2>
            <form onSubmit={savePolicy}>
                <input type="text"
                    placeholder="Enter policy Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter Benefit"
                    onChange={(e) => setBenefit(e.target.value)}
                    value={benefit}
                />
                <input type="text"
                    placeholder="Enter Value"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PolicyForm