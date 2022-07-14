import './Header.module.css'
import Header from "./Header";
import React from "react";


import {connect} from "react-redux";
import {logoutThunkC} from "../../redux/auth-reducer";


export class HeaderContainer extends React.Component {     // классовая Компонента


    render() {
        return (
           <Header {...this.props}/>
        );
    }


}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {logoutThunkC}) (HeaderContainer)
