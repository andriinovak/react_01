import { createSelector } from 'reselect'


export const getPageSize = (state) => {
    return state.usersData.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersData.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersData.currentPage;
}
export const getIsDownload = (state) => {
    return state.usersData.isDownload;
}
export const getFollowingInProgres = (state) => {
    return state.usersData.followingInProgres;
}


export const getUsers = (state) => {
    return state.usersData.users;
}

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users;
});