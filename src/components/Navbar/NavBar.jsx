import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {     // Компонента
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/menu" className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>Menu</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>Contacts</NavLink>
            </div>

            <div className={s.item}>
                <Sidebar />
            </div>
        </nav>
    );
}

export default Navbar