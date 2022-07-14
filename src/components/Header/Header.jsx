import s from'./Header.module.css'
import {NavLink} from "react-router-dom";
import {logoutThunkC} from "../../redux/auth-reducer";

                    //деструктуризация
const Header = ({isAuth, login, logoutThunkC}) => {     // Компонента

    return (
        <header className= {s.header}>
            <img
                src="https://cdn.pixabay.com/photo/2020/06/24/05/29/tree-5334823_960_720.png"
                alt=""/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logoutThunkC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header