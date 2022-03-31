import {combineReducers, createStore} from "redux";
import profileReducer from "../redux/profile-reducer";
import sidebarReducer from "../redux/sidebar-reducer";
import messagesReducer from "../redux/messages-reducer";
import usersReducer from "../redux/users-reducer";

let reducers = combineReducers({  // воспринимется как state со вложенными обьектами
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);  //функция которая создает store

export default store;