import React from 'react'
import cssStyle from './UserItem.module.css'
import { Link } from 'react-router-dom'


function UserItem(props) {
    return (
        <div className={cssStyle.user}>
            <div className={cssStyle.avatarka}>
                <Link to={'/profile/' + props.id}>
                    <img className={cssStyle.avatar} src={props.ava} alt='ava' />
                </Link>
            </div>
            <div className={cssStyle.follow}>

                {props.followed ? <button disabled={props.followingInProgres} onClick={() => {

                    props.setUnfollowUserThunk(props.id);

                }}>Unfollow</button>
                    : <button disabled={props.followingInProgres} onClick={() => {

                        props.setFollowUserThunk(props.id);

                    }}>Follow</button>}

            </div>
            <div className={cssStyle.user_content}>
                <div>
                    fullname {props.fullName}
                </div>
                <div>
                    status {props.status}
                </div>
                <div>
                    location {props.location_city}
                </div>
            </div>
        </div>
    );
}

export default UserItem;
