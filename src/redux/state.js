import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello! It\'s my first comment', likes: 30},
                {id: 2, message: 'Cool work i think', likes: 4},
                {id: 3, message: 'Man ua crazy B)', likes: 7},
                {id: 4, message: 'Yoo dude', likes: 0},
            ],
            newPostText: ''
        },

        messagesPage: {
            dialogData: [
                {id: 1, name: 'Kerim'},
                {id: 2, name: 'Vitaly'},
                {id: 3, name: 'Egor'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Phillip'}
            ],
            messageData: [
                {id: 1, message: "Hello! How are you?"},
                {id: 2, message: "fine dude Nice to see you"},
                {id: 3, message: "Lets go drink a cup of coffee"},
            ],
            newMessageBody: ''

        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer( this._state.profilePage, action)

            this._callSubscriber(this._state);      // простенькая реализация паттерна observer

    }
}



export default store;