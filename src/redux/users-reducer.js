import {follow_unfollowAPI, userAPI} from "../api/api";
import {updateObjectInArray} from "../components/common/utils/object-helpers";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
//const CHANGE_USERS_PAGE = "CHANGE-USERS-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,        // Общее количество юзеров
    page: 1,                    //
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state,action.id, "id", {followed: true})
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state,action.id, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, users: [...action.users], page: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }


}


export const followCreator = (idUser) => ({type: FOLLOW_USER, id: idUser})
export const unfollowCreator = (idUser) => ({type: UNFOLLOW_USER, id: idUser})
export const setUsersCreator = (users, page) => ({type: SET_USERS, users, page})
export const setUsersCountACreator = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgressAC = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})
export default usersReducer;

export const getUsersThunkCreator = (page, pageSize) => {

    return async (dispatch) => {                          //замыкание
        dispatch(setIsFetchingAC(true))

        let response = await userAPI.getUsers(page, pageSize)

        dispatch(setUsersCreator(response.items, page))
        dispatch(setUsersCountACreator(response.totalCount))
        dispatch(setIsFetchingAC(false));
    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgressAC(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgressAC(false, userId));
}

export const unfollowThunkC = (userId) => {

    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, follow_unfollowAPI.unfollowUser.bind(follow_unfollowAPI), unfollowCreator)

    }
}

export const followThunkC = (userId) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, follow_unfollowAPI.followUser.bind(follow_unfollowAPI), followCreator)

        }
}