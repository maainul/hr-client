import { Link } from "react-router-dom"


function MenuList({ menus }) {

    function renderSubmenus(submenus) {
        return submenus.map((submenu, index) => (
            <div key={index}>
                <p>Icon: {submenu.icon}</p>
                <p>Label: {submenu.label}</p>
                <p>URL: {submenu.url}</p>
                <Link to={submenu.url}>Go to {submenu.label}</Link>
            </div>
        ));
    }


    function renderMenus() {
        return menus.map((menu, i) => {
            return (
                <tr key={menu._id}>
                    <td>{menu.menuTitle}</td>
                    <td>
                        {renderSubmenus(menu.submenu)}
                    </td>
                    <td><Link to={`/menu/${menu._id}`}>View</Link></td>
                    <td><Link to={`/menu/update/${menu._id}`}>Edit</Link></td>
                </tr>
            )
        })
    }


    return (
        <>
            <h2>Menu List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Menu Icon</th>
                        <th>Menu Label</th>
                        <th>Menu Title</th>
                        <th>Submenu</th>
                    </tr>
                </thead>
                <tbody>
                    {renderMenus()}
                </tbody>
            </table>
        </>
    )
}

export default MenuList