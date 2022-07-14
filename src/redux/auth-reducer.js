import {authAPI, follow_unfollowAPI, LoginAPI} from "../api/api";
import {toggleFollowingInProgressAC, unfollowCreator} from "./users-reducer";

const SET_USER_DATA = 'SET-USER-DATA';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    userId: null,
    login: null,
    email: null,
    //isFetching: false
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}
export const setAuthUserDataAC = (email, userId, login, isAuth ) => ({type: SET_USER_DATA, payload: {email, userId, login, isAuth }})

export default authReducer;

export const authThunkC = () => {

    return (dispatch) => {
       return  authAPI.authMe().then(data => {
            if (data.resultCode === 0) {       // проверка на ошибку обработки если 1 то ошибка(правила API)
                let {email, id, login} = data.data;
                dispatch(setAuthUserDataAC(email, id, login, true));
            }
        });
    }
}

export const loginThunkC = (email, password, rememberMe, setStatus) => (dispatch) => {

        authAPI.login(email, password, rememberMe).then(dataL => {
            setTimeout(() => {
                alert(JSON.stringify(dataL, null, 2))
            });
            if (dataL.resultCode === 0) {
               let {userId} = dataL.data;
                dispatch(authThunkC(userId));
            } else {
                setStatus(dataL.messages)
            }

        });
}

export const logoutThunkC = () => (dispatch) => {

    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
        }

    });
}