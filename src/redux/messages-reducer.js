const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
const messagesReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                 newMessageBody: '',
                messageData: [...state.messageData,{id: 5, message: body} ]
            };

            //stateCopy.messageData.push({id: 5, message: body});

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageBody
            }
        default:
            return state;
    }


}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: text})
export default messagesReducer;