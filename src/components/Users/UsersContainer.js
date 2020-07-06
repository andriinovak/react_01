import { setCurrentPage, getDataAboutUsersThunk, setFollowUserThunk, setUnfollowUserThunk } from "../../redux/users_reducers";
import UsersCl from "./UsersCl";
import { connect } from 'react-redux';
import { AuthRedirectContainer } from "../../hoc/AuthRedirectContainer";
import { compose } from "redux";
import { getUsersSuper, getPageSize, getTotalUsersCount, getCurrentPage, getIsDownload, getFollowingInProgres } from "../../redux/users_selectors";


function mapStateToProps(state) {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isDownload: getIsDownload(state),
        followingInProgres: getFollowingInProgres(state),
    }
}


export default compose(connect(mapStateToProps, { setCurrentPage, getDataAboutUsersThunk, setFollowUserThunk, setUnfollowUserThunk }), AuthRedirectContainer)(UsersCl);

// const UsersContainer = AuthRedirectContainer(connect(mapStateToProps, {
//     setCurrentPage,
//     getDataAboutUsersThunk,
//     setFollowUserThunk,
//     setUnfollowUserThunk,
// })(UsersCl));
// export default UsersContainer;


// usersData: state.usersData,
