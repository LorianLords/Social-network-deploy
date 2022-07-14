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

}
const messagesReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageBody;
            return {
                ...state,
                messageData: [...state.messageData,{id: 5, message: body} ]
            };

        default:
            return state;
    }


}


export const sendMessageCreator = (messageBody) => ({type: SEND_MESSAGE, messageBody})

export default messagesReducer;