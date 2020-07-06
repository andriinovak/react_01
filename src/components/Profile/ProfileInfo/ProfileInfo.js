import React from 'react'
import cssStyles from './ProfileInfo.module.css'
import DownloadAnimation from '../../Users/DownloadAnimation';
import ProfileStatusHooks from './ProfileStatusHooks'


function ProfileInfo(props) {
    if (!props.profile) {
        return <DownloadAnimation />
    } else {
        return (
            <div>
                <div>
                    <img className={cssStyles.content_fon} src='https://images.wallpaperscraft.ru/image/pliazh_palma_okean_127914_1366x768.jpg' alt='img'></img>
                </div>
                <div>
                    <img className={cssStyles.avatar} src={props.profile.photos.small} alt={props.profile.fullName}></img>
                </div>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatusThunk} />
            </div>
        );
    }
}

export default ProfileInfo;