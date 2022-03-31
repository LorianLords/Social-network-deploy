const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

let initialState = {
      users: [
       /*   {id: 1, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Kerim D.', followed: false,
              location: { country: 'Belarus', city: 'Minsk'},  quote: "Life is bullshit but i haven't any ideas"},
          {id: 2, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Johny DK.', followed: false,
              location: {country: 'Czech', city: 'Praga'}, quote: "Country road take me home..."},
          {id: 3, photoUrl: 'https://dni24.com/uploads/posts/2022-03/1647092561_2.jpg', fullname: 'Alex M.', followed: true,
              location: { country: 'Milostan', city: 'Herbin'}, quote: "Like Mick Jagger :D"},*/
      ]
}
const usersReducer = ( state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            debugger;
        return {
            ...state,
            users: state.users.map( u => {
                if (u.id === action.id) {
                    return {...u, followed: true}
                }
                return u;
            })
        }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
return {...state, users: [ ...action.users]}

        default:
            return state;
    }


}


export const followCreator = (idUser) => ({type: FOLLOW_USER, id: idUser})
export const unfollowCreator = (idUser) => ({type: UNFOLLOW_USER, id: idUser})
export const setUsersCreator = (users) => ({type: SET_USERS, users})
export default usersReducer;