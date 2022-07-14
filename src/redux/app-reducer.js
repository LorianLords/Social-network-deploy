import {authThunkC} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED SUCCESS"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}
export const initializedAC = () => ({type: INITIALIZED_SUCCESS})

export const initializeThunk = () => (dispatch) => {

  let promise = dispatch(authThunkC());

 // Promise.all([promise]).then()           //Так можно сделать с массивом промисов
   promise.then( () => {
       dispatch(initializedAC());
   }


)}

export default appReducer;