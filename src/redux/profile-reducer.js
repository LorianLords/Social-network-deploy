const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
        postData: [
            {id: 1, message: 'Hello! It\'s my first comment', likes: 30},
            {id: 2, message: 'Cool work i think', likes: 4},
            {id: 3, message: 'Man ua crazy B)', likes: 7},
            {id: 4, message: 'Yoo dude', likes: 0},
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                postData: [...state.postData, { id: 5, message: state.newPostText, likes: 0}],
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
        case UPDATE_POST_TEXT:

            return {
                ...state,
                newPostText: action.text
            }
            /*let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy*/
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})

export default profileReducer;