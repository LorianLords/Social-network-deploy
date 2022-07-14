
import React from "react";
import {
    addPostActionCreator,
    getProfileThunkCreator,
    getStatusThunk, updateStatusThunk
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { useLocation,useParams} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import Profile from "./Profile";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
 export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, params, navigator}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId){
            profileId = this.props.authUserId
            if (!profileId){
                this.props.history.push("/login");
            }
        }
        this.props.getProfileThunkCreator(profileId);
        this.props.getStatusThunk(profileId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={!this.props.status ? 'nothing' : this.props.status}
                     updateStatus={this.props.updateStatusThunk}/>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    stateProfile: state.profilePage,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});



export default compose(
    connect(mapStateToProps, {getProfileThunkCreator, addPostActionCreator, getStatusThunk, updateStatusThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)