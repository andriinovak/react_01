import * as axios from 'axios'


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'bb86129e-684c-48de-9d63-9901c8cd3250'
    }
});

export const UsersAPI = {
    getUsersDataFromServer(currentPage = 1, pageSize = 50) {
        return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    setUserFollow(userId) {
        return axiosInstance.post(`/follow/${userId}`);
    },

    setUserUnfollow(userId) {
        return axiosInstance.delete(`/follow/${userId}`);
    },
}


export const ProfileApi = {
    getUserProfileData(userId) {
        return axiosInstance.get(`/profile/${userId}`);
    },
    getStatusFromProfile(userId) {
        return axiosInstance.get(`/profile/status/${userId}`);
    },
    updateStatus(status) {
        return axiosInstance.put(`/profile/status`, { status: status });
    },
}

export const LoginingApi = {
    getMyLoginData() {
        return axiosInstance.get('/auth/me');
    },

    loginToSite(email, password, rememberMe = false) {
        return axiosInstance.post('/auth/login', { email, password, rememberMe });
    },

    logoutFromSite() {
        return axiosInstance.delete('/auth/login');
    },
}