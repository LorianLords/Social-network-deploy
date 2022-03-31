import s from './MyPost.module.css'
import Post from "./Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const MyPost = (props) => {     // Компонента

    let postItems = props.stateProfile.postData.map( post =>   <Post message={post.message} likes ={post.likes} key={post.id} />)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text);
    }


    return (
        <div>
           <ProfileInfo />
            <div>
                My post
                <div>
                    <textarea placeholder={"your post..."} value={props.newPostText} onChange={onPostChange}/>
                    <button onClick={onAddPost}>send</button>
                </div>
            </div>
            {postItems}
        </div>
    );
}

export default MyPost