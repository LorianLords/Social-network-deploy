import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/Messages";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextareaSchema from "../FormValidation/FieldsSchema.js";
import styles from "../FormsControl/FormControl.module.css"

const Dialogs = (props) => {     // Компонента

    let dialogElements =  props.stateDialogs.dialogData.map( d =>  <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = props.stateDialogs.messageData.map( m =>    <MessageItem text = {m.message} key={m.id}/>)


    const onSendMessageClick = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            props.sendMessage(values);
            setSubmitting(false)
        }, 400)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <Formik
                    initialValues={{textareaBody: ''}}
                    validationSchema={TextareaSchema}
                    onSubmit={onSendMessageClick}
                >
                    {({isSubmitting, errors, touched}) => (
                        <Form className={touched.textareaBody && errors.textareaBody ? styles.error : ""}>
                            <div>
                                <Field component="textarea" name="textareaBody" placeholder={'Enter your message'}/>
                            </div>
                            <ErrorMessage name="textareaBody" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Send
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    );
}

export default Dialogs