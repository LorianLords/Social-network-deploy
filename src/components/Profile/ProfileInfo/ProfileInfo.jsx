import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ava from '../../../assets/ava.png'
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

class MyPost extends React.Component {
    photo
    check() {
        if (!this.props.profile){
            return <Preloader />
        }

        this.photo = this.props.profile.photos.large;
    }

    render(){
        return (
            <div>
                {this.check()}
                <div className={s.avatar}>
                    <img src={ this.photo === null ? ava : this.photo} alt=""/>
                    <div className={'Information'}>

                        Ava + photo
                    </div>

                </div>
               <ProfileStatusWithHooks status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>

        );
    }
}

export default MyPost