

import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";




let mapsStateToProps = (state/*уже взят state из store connect-oм*/) => {
    return {
        stateDialogs: state.messagesPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (values) => {
            dispatch(sendMessageCreator(values.textareaBody))
        }
    }
}

export default compose(
    connect(mapsStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);