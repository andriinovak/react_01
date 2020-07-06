import React from 'react'
import cssStyles from './Post.module.css'


function Post(props) {
    return (
        <div className={cssStyles.post}>
            <img src='https://avatarko.ru/img/avatar/23/Star_Wars_Yoda_22495.jpg' alt='ava' />
            <span className={cssStyles.item}>{props.id_num}  {props.post}</span>
        </div>
    );
}

export default Post;
