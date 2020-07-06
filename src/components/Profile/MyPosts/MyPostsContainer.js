import { addPostActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        profileData: state.profileData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewPost: (messageObj) => {
            dispatch(addPostActionCreator(messageObj.message));
        },
        // onPostChange: (e) => {
        //     let text = e.target.value;
        //     dispatch(newPostTextActionCreator(text));
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
