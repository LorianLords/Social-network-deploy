
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


/*const MyPostContainer = () => {     // Компонента
    return (
        <StoreContex.Consumer >
            { (store) => {

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updatePostActionCreator(text))
                }
                let state = store.getState();

                return   <MyPost addPost={addPost} updateNewPostText={onPostChange} stateProfile={state.profilePage}/>
            }

            }


        </StoreContex.Consumer>
    );

}*/

let mapsStateToProps = (state/*уже взят state из store connect-oм*/) => {
    return {
        stateProfile: state.profilePage
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

const MyPostContainer = connect(mapsStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer