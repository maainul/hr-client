import axios from "axios"
import { useEffect, useState } from "react"
import GroupForm from "./GroupForm"
import GroupList from "./GroupList"

function Groups() {

    const [groups, setGroups] = useState([])

    async function getGroupList() {
        try {
            const res = await axios.get("http://localhost:1337/api/v1/auth/group/list")
            setGroups(res.data.plist)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getGroupList()
    }, [])



    return (
        <>
            <GroupForm getGroupList={getGroupList} />
            <GroupList groups={groups} />
        </>
    )
}

export default Groups
