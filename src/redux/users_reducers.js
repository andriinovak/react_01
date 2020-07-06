import { UsersAPI } from "../api/api"

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isDownload: false,
    followingInProgres: false,
}

export const foll_unfoll = (id_num) => {
    return {
        type: 'FOLL_UNFOLL',
        userId: id_num,
    }
}
export const setUsers = (users, totalCount) => {
    return {
        type: 'SET_USERS',
        users: users,
        totalCount: totalCount,
    }
}
export const setCurrentPage = (numberCurrentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: numberCurrentPage,
    }
}
export const onOffDownloadAnimation = (isDownload) => {
    return {
        type: 'ON_OFF_DOWNLOAD_ANIMATION',
        isDownload: isDownload,
    }
}
export const onOffFollowingButton = (followingInProgres) => {
    return {
        type: 'ON_OFF_FOLLOWING_BUTTON',
        followingInProgres: followingInProgres,
    }
}


const usersReducer = (userFile = initialState, action) => {
    switch (action.type) {
        case 'FOLL_UNFOLL': {
            let usersCopy = Object.assign({}, userFile);
            for (let item of usersCopy.users) {
                if (item.id === action.userId) {
                    item.followed = !item.followed;
                }
            }
            return usersCopy;
        }
        case 'SET_USERS': {
            let usersCopy = Object.assign({}, userFile);
            usersCopy.users = action.users;
            usersCopy.totalUsersCount = action.totalCount;
            return usersCopy;
        }
        case 'SET_CURRENT_PAGE': {
            let usersCopy = Object.assign({}, userFile);
            usersCopy.currentPage = action.currentPage;
            return usersCopy;
        }
        case 'ON_OFF_DOWNLOAD_ANIMATION': {
            let usersCopy = Object.assign({}, userFile);
            usersCopy.isDownload = action.isDownload;
            return usersCopy;
        }
        case 'ON_OFF_FOLLOWING_BUTTON': {
            let usersCopy = Object.assign({}, userFile);
            usersCopy.followingInProgres = action.followingInProgres;
            return usersCopy;
        }
        default:
            return userFile;
    }
}


export const getDataAboutUsersThunk = (numberOfPage, pageSize) => {
    return function (dispatch) {
        dispatch(onOffDownloadAnimation(true));
        UsersAPI.getUsersDataFromServer(numberOfPage, pageSize).then(response => {
            dispatch(setUsers(response.items, response.totalCount));
            dispatch(onOffDownloadAnimation(false));
        });
    }
}

export const setFollowUserThunk = (userId) => {
    return function (dispatch) {
        dispatch(onOffFollowingButton(true));
        UsersAPI.setUserFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(foll_unfoll(userId));
                dispatch(onOffFollowingButton(false));
            };
        });
    };
}

export const setUnfollowUserThunk = (userId) => {
    return function (dispatch) {
        dispatch(onOffFollowingButton(true));
        UsersAPI.setUserUnfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(foll_unfoll(userId));
                dispatch(onOffFollowingButton(false));
            };
        });
    };
}


export default usersReducer;
