import axios from "axios"
import { useState } from "react"


function MenuForm({ getMenuList }) {

    const [menuTitle, setMenuTitle] = useState()
    const [icon, setIcon] = useState()
    const [label, setLabel] = useState()
    const [url, setUrl] = useState()


    async function saveMenu(e) {
        e.preventDefault()
        try {
            const submenu = [{ icon, label, url }]
            const menuData = { menuTitle, submenu }
            await axios.post('http://localhost:1337/api/v1/menu/create', menuData)
            getMenuList()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Menu Form</h2>
            <form onSubmit={saveMenu}>
                <input type="text"
                    placeholder="Enter menu Name"
                    onChange={(e) => setMenuTitle(e.target.value)}
                    value={menuTitle}
                />
                <input type="text"
                    placeholder="Enter menu Icon"
                    onChange={(e) => setIcon(e.target.value)}
                    value={icon}
                />
                <input type="text"
                    placeholder="Enter menu Label"
                    onChange={(e) => setLabel(e.target.value)}
                    value={label}
                />
                <input type="text"
                    placeholder="Enter menu URL"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MenuForm