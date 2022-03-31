import {NavLink} from "react-router-dom";
import s from "../NavBar.module.css";


let Friend = (props) => {

    return (
       <div className={s.friend}>
           <img src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
           <NavLink to={''} className={({ isActive }) => isActive ? `${s.active}` : `${s.item}`}>{props.name}</NavLink>
       </div>
    )
}

export default Friend