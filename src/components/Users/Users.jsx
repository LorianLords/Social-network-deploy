import React from "react";
import Paginator from "../FormsControl/Paginator/Paginator";
import User from "./User";


const Users = (props) =>{


    return (

        <div>
          <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} page={props.page} onPageChange={props.onPageChange} portionSize={20}/>

            <div>
                {
                    props.users.map(u =>
                        <User u={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}/>)
                }
            </div>
        </div>

    );
}


export default Users;