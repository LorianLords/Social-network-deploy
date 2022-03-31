import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
const Users = (props) => {
    if (props.users.length === 0){
       axios.get("https://social-network.samuraijs.com/api/1.0/users")
           .then(response => {
               debugger;
           props.setUsers()
        });
        /* props.setUsers([
            {id: 1, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Kerim D.', followed: false,
                location: { country: 'Belarus', city: 'Minsk'},  quote: "Life is bullshit but i haven't any ideas"},
            {id: 2, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Johny DK.', followed: false,
                location: {country: 'Czech', city: 'Praga'}, quote: "Country road take me home..."},
            {id: 3, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Alex M.', followed: true,
                location: { country: 'Milostan', city: 'Herbin'}, quote: "Like Mick Jagger :D"},
        ])*/
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.user}>
                        <img src={u.photoUrl} alt=""/>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unFollowUser(u.id)}}>Подписаться</button>
                            : <button onClick={() => {props.followUser(u.id)}}>Отписаться</button>}
                    </div>

                    </div>
                    <div>
                        <div>
                            <div>{u.fullname}</div>
                            <div>{u.quote}</div>
                        </div>
                        <div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;