import {connect} from "react-redux";
import {
     followThunkC, getUsersThunkCreator, toggleFollowingInProgressAC,
     unfollowThunkC
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getFollowingInProgress,
    getIsFetching,
    getPage,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector
} from "../../redux/users-selector";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize);
    }

    onPageChange = (p) => {
        this.props.getUsers(p, this.props.pageSize);

    }

    render() {
        return (
            <>
                {this.props.isFetching ?   <Preloader /> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                page={this.props.page}
            users={ this.props.users}
                onPageChange={this.onPageChange}
                toggleFollowingInProgress={this.props.toggleFollowingInProgressAC}
                followingInProgress = {this.props.followingInProgress}
                follow = {this.props.followThunkC}
                unfollow = {this.props.unfollowThunkC}
            />

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        page: getPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    connect(mapStateToProps, // connect может сам все задиспатчить, дотаточно кинуть ему обьект с ссылками*/
 {followThunkC, unfollowThunkC, toggleFollowingInProgressAC, getUsers: getUsersThunkCreator}),
//WithAuthRedirect
)(UsersContainer)