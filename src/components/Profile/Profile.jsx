import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer";
const Profile = (props) => {     // Компонента

    return (
        <div className={'profile'}>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt=""/>
            <MyPostContainer /*store={props.store}*/
                /*posts={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}*/
                /* addPost={props.addPost}
                updatePostText={props.updatePostText}*//>
        </div>
    );
}

export default Profile