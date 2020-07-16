import React, { useState } from 'react'
import cssStyles from './ProfileInfo.module.css'
import DownloadAnimation from '../../Users/DownloadAnimation'
import ProfileStatusHooks from './ProfileStatusHooks'
import ProfileInformationReduxForm from './ProfileInformationForm'
import Contacts from './Contacts'


const fakePhotoUrl = 'https://lh3.googleusercontent.com/XtyURW0mKNnKu_6TzQ5_WpuKF4A7M1oFV6p828eVEWIvTZPtZz2gq5sNM78jpNPMMRmZ';


function ProfileInfo(props) {

    const addPhotoCall = (e) => {
        if (e.target.files.length) {
            props.addPhoto(e.target.files[0]);
        }
    }

    let [editMode, setEditMode] = useState(false);
    let [errorInForm, setErrorInForm] = useState(undefined);


    const onSubmit = (submitData) => {
        props.saveProfileThunk(submitData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    if (!props.profile) {
        return <DownloadAnimation />
    } else {
        return (
            <div>
                <div>
                    <img className={cssStyles.content_fon} src='https://images.wallpaperscraft.ru/image/pliazh_palma_okean_127914_1366x768.jpg' alt='img'></img>
                </div>
                <div>
                    <img className={cssStyles.avatar} src={props.profile.photos.small || fakePhotoUrl} alt={props.profile.fullName} />
                </div>
                <div>
                    {props.isOwner && <input type='file' onChange={addPhotoCall} />}
                </div>
                {editMode
                    ? <ProfileInformationReduxForm profile={props.profile} initialValues={props.profile} setEditMode={setEditMode} setErrorInForm={setErrorInForm} onSubmit={onSubmit} />
                    : <ProfileInformation profile={props.profile} isOwner={props.isOwner} errorInForm={errorInForm} setEditMode={setEditMode} />}

                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatusThunk} isOwner={props.isOwner} />
            </div>
        );
    }
}


function ProfileInformation(props) {
    return (
        <div>
            {props.isOwner && <button onClick={() => props.setEditMode(true)}>Redaction</button>}
            <div>
                <strong>FullName: </strong>{props.profile.fullName}
            </div>
            <div>
                <strong>Looking for a job: </strong>{props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <strong>Description job: </strong>{props.profile.lookingForAJobDescription}
                </div>}
            <div>
                <strong>About me: </strong>{props.profile.aboutMe}
            </div>
            <Contacts contacts={props.profile.contacts} />
            {props.errorInForm && <div>{props.errorInForm}</div>}
        </div>
    );
}


export default ProfileInfo;