import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/Messages";

const Dialogs = (props) => {     // Компонента

    let dialogElements =  props.stateDialogs.dialogData.map( d =>  <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = props.stateDialogs.messageData.map( m =>    <MessageItem text = {m.message} key={m.id}/>)

    let newMessageBody = props.stateDialogs.newMessageBody;

    let onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body)
    }
    let onSendMessageClick = () => {
        props.sendMessage();
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.textarea_send}>
                    <textarea  value={newMessageBody}
                               placeholder={'Enter your message'}
                               onChange={onSendMessageChange}/>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs