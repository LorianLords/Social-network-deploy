

import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";




let mapsStateToProps = (state/*уже взят state из store connect-oм*/) => {
    debugger;
    return {
        stateDialogs: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateMessageBody: (body) => {
            dispatch(updateMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapsStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer