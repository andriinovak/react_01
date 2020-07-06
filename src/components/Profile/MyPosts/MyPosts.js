import React from 'react'
import cssStyles from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostReduxForm from './AddPostForm';


const MyPosts = React.memo(props => {

    let postsList = props.profileData.postsData.map((item) => <Post id_num={item.id} post={item.post} key={item.id} />);

    return (
        <div>
            <div className={cssStyles.myposts}>
                <h2>My posts</h2>
            </div>
            <AddPostReduxForm onSubmit={props.createNewPost} />
            <br />
            {postsList}
        </div>
    );
})


export default MyPosts;
