import React from "react";
import {Form, Formik, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchem";
import {loginThunkC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate, Redirect} from "react-router-dom";
import styles from "../FormsControl/FormControl.module.css";


                    // деструктуризация
const Login = ({loginThunkC,isAuth}) => {

    const submit = (values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            loginThunkC(values.email, values.password, values.rememberMe, setStatus);
            setSubmitting(false)
        }, 400)

    }

    if (isAuth) {
        return<Navigate to='/profile'/>
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                onSubmit={submit}
                validateOnBlur
                validationSchema={loginFormSchema}
            >
                {({ isSubmitting, status, touched, errors }) => (
                    <Form >
                        <div className={touched.email &&  errors.email? styles.error : ""}>
                            <Field type="email" name="email" placeholder={'Email'}/>
                            <ErrorMessage name="email" component="div" />
                        </div>
                       <div className={touched.password &&  errors.password? styles.error : ""}>
                        <Field type="password" name="password"  placeholder={'Password'}/>
                        <ErrorMessage name="password" component="div" />
                       </div>
                        <div>
                        <Field type="checkbox" name="rememberMe" /> remember me
                        </div>
                        <div className={styles.error}>
                            {status}
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkC}) (Login);