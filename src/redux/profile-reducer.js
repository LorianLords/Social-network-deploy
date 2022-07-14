import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hello! It\'s my first comment', likes: 30},
        {id: 2, message: 'Cool work i think', likes: 4},
        {id: 3, message: 'Man ua crazy B)', likes: 7},
        {id: 4, message: 'Yoo dude', likes: 0},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                postData: [...state.postData, {id: 5, message: action.postBody, likes: 0}],
                newPostText: ''
            }
            /* let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likes: 0
             };
             let stateCopy = {...state};
             stateCopy.postData = [...state.postData];
             stateCopy.postData.push(newPost);
             stateCopy.newPostText = '';*/
        }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = (postBody) => ({type: ADD_POST, postBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_STATUS, status})

export default profileReducer;

export const getProfileThunkCreator = (profileId) => { return (dispatch) => {
    profileAPI.getProfile(profileId).then(data => {
        dispatch(setUserProfile(data))
    });
}}
export const getStatusThunk = (profileId) => { return (dispatch) => {       // санка для нескольких диспатче
    profileAPI.getStatus(profileId).then(data => {                  // запрашиваем статус у апи, а она запросит у внешнег ресурса
    console.log(data)
        dispatch(setProfileStatus(data))                    // сразу после этого как придет ответ диспатчим его для сохранения в state
    });
}}
export const updateStatusThunk = (status) => { return (dispatch) => {       // санка для нескольких диспатчей
    profileAPI.updateStatus(status).then(data => {                  // меняем статус у апи, и в ответ придет обьект с resultcode об успешности исправления
        if (data.resultCode === 0){
            dispatch(setProfileStatus(status))                    // сразу после этого как придет ответ диспатчим его для сохранения в state
        }
    });
}}