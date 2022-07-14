import s from './Profile.module.css'
import Post from "./Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";

import styles from "../FormsControl/FormControl.module.css";
import TextareaSchema from "../FormValidation/FieldsSchema";


const Profile = ({stateProfile,addPostActionCreator,profile, status, updateStatus}) => {     // Компонента

    let postItems = stateProfile.postData.map( post =>   <Post message={post.message} likes ={post.likes} key={post.id} />)

    const onAddPost = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            addPostActionCreator(values.textareaBody);
            setSubmitting(false)
        }, 400)
    }
    return (
        <div className={s.profile}>
           <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>

            <Formik
                initialValues={{ textareaBody: '', withBlur: ''}}
                validationSchema={TextareaSchema}
                onSubmit={onAddPost}
            >
                {({ isSubmitting, touched, errors, handleBlur }) => (
                    <Form className={touched.textareaBody &&  errors.textareaBody? styles.error : ""}>
                        <div>
                            <Field component='textarea'  name="textareaBody" placeholder={'Write your post..'} />
                        </div>
                            <ErrorMessage name="textareaBody" component="div"/>

                        <button type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
            {postItems}
        </div>
    );
}

export default Profile