import './App.css';
import React, {Suspense} from "react";
import Navbar from "./components/Navbar/NavBar";
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";

import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader";
import {initializeThunk} from "./redux/app-reducer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
class App extends Component {

    componentDidMount() {
        this.props.initializeThunk();
    }


    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <BrowserRouter>

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="content">
                        <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/profile/:userId"
                                   element={<ProfileContainer/>}/>
                            <Route path="/profile"
                                   element={<ProfileContainer/>}/>

                            <Route path='/dialogs/*'
                                   element={<DialogsContainer/>}/>

                            <Route path='/users/*'
                                   element={<UsersContainer /*store={props.store}*//>}/>
                            <Route path='/login'
                                   element={<Login/>}/>
                        </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeThunk})(App)
);
