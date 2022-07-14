import s from './Post.module.css'

const Post = (props) => {     // Компонента
    return (
        <div >
               <div className={s.item}>
                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1615777823.1638921600" alt=""/>
                   {props.message}
                    <div>
                        <span>like</span> { props.likes }
                    </div>

                </div>
        </div>
    );
}

export default Post