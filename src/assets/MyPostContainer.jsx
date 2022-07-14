
import {addPostActionCreator, updatePostActionCreator} from "../redux/profile-reducer";
import Profile from "../components/Profile/Profile";
import {connect} from "react-redux";


let mapsStateToProps = (state/*уже взят state из store connect-oм*/) => {
    return {
        stateProfile: state.profilePage,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
     return {
            addPost: () => {
                dispatch(addPostActionCreator())
            },
         updateNewPostText: (text) => {
             dispatch(updatePostActionCreator(text))
         }
     }
}

const MyPostContainer = connect(mapsStateToProps, mapDispatchToProps)(Profile)

//export default MyPostContainer