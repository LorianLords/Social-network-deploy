import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

 /*    componentDidUpdate(prevProps, prevState, snapshot)
    {

        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            });
        }
    }*/

        return (
            <div>
                {!editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{status}</span>
                    </div> :
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={status}/>
                    </div>}


            </div>

        );

}


export default ProfileStatusWithHooks