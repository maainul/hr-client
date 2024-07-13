import axios from "axios"
import { useEffect, useState } from "react"
import MenuForm from "./MenuForm"
import MenuList from './MenuList'

function Menus() {

    const [menus, setMenus] = useState([])

    async function getMenuList() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list`)
            setMenus(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMenuList()
    }, [])



    return (
        <>
            <MenuForm getMenuList={getMenuList} />
            <MenuList menus={menus} />
        </>
    )
}

export default Menus
