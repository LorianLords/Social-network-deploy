import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (idUser) => {
          dispatch(followCreator(idUser));
        },
        unFollowUser: (idUser) => {
            dispatch(unfollowCreator(idUser));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)