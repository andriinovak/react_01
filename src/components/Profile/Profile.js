import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


function Profile(props) {
    return (
        <div>
            <ProfileInfo {...props} isOwner={props.isOwner} addPhoto={props.addPhoto} saveProfileThunk={props.saveProfileThunk} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
