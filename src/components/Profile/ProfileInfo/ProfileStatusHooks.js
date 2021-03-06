import React, { useState, useEffect } from 'react'


function ProfileStatusHooks(props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const onEditMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }
    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {!editMode &&
                <div>
                    <strong>Status: </strong><span onClick={onEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <strong>Status: </strong><input autoFocus={true} onBlur={offEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    );
}




export default ProfileStatusHooks;