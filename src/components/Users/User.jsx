import React from "react";
import s from './Users.module.css'

import png from '../../assets/ava.png'
import {NavLink} from "react-router-dom";

const User = ({u, followingInProgress, unfollow, follow}) =>{


    return (
        <div>
        <div className={s.user}>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : png} alt=""/>
            </NavLink>

            <div>
                {u.followed
                    ? <button disabled={followingInProgress.some(id => id === u.id)}
                              onClick={() => {unfollow(u.id)}} >Отписаться</button>

                    : <button disabled={followingInProgress.some(id => id === u.id)}
                              onClick={() => {follow(u.id)}}>Подписаться</button>
                }
            </div>

        </div>
    <div>
        <div>
            <div>{u.name}</div>
            <div>{u.quote}</div>
        </div>
        <div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </div>
    </div>
</div>)

}



export default User;