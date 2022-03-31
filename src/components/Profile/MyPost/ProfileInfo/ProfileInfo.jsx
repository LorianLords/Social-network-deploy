import s from './ProfileInfo.module.css'

const MyPost = () => {     // Компонента
    return (

            <div className={s.avatar}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                <div className={'Information'}>
                    Ava + photo
                </div>

            </div>

    );
}

export default MyPost