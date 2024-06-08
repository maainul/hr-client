import axios from "axios"
import { useState } from "react"


function GroupForm({ getGroupList }) {

    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [permissions, setPermissions] = useState([])


    async function saveGroup(e) {
        e.preventDefault()
        try {
            const groupData = { name, code, permissions: ["665eb30d7233a01b6e395e41", "665eb3127233a01b6e395e43", "665eb3157233a01b6e395e45", "665eb31a7233a01b6e395e47", "665eb31f7233a01b6e395e49"] }
            await axios.post('http://localhost:1337/api/v1/auth/group/create', groupData)
            getGroupList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Group Form</h2>
            <form onSubmit={saveGroup}>
                <input type="text"
                    placeholder="Enter group Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="text"
                    placeholder="Enter group Code"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupForm