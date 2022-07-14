import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "../redux/profile-reducer";
import sidebarReducer from "../redux/sidebar-reducer";
import messagesReducer from "../redux/messages-reducer";
import usersReducer from "../redux/users-reducer";
import authReducer from "../redux/auth-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "../redux/app-reducer";
let reducers = combineReducers({  // воспринимется как state со вложенными обьектами
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;