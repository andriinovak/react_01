import { ProfileApi } from "../api/api"
import { stopSubmit } from "redux-form"


export const addPostActionCreator = (text) => {
    return {
        type: 'ADD-POST',
        text: text,
    }
}
export const newPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile: profile,
    }
}
export const setStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status: status,
    }
}
export const setPhoto = (file) => {
    return {
        type: 'SET_PHOTO',
        file: file,
    }
}


let initialState = {
    postsData: [
        { id: 1, post: 'hello_1' },
        { id: 2, post: 'hello_2' },
        { id: 3, post: 'hello_3' },
    ],
    newPostText: '',
    profile: null,
    status: null,
}

const profileReducer = (profile = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newObjPost = {
                id: profile.postsData.length + 1,
                post: action.text,
            };
            let newProfile = Object.assign({}, profile);
            newProfile.postsData.push(newObjPost);
            // newProfile.newPostText = '';
            return newProfile;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let newProfile = Object.assign({}, profile);
            newProfile.newPostText = action.newText;
            return newProfile;
        }
        case 'SET_USER_PROFILE': {
            let newProfile = Object.assign({}, profile);
            newProfile.profile = action.profile;
            return newProfile;
        }
        case 'SET_STATUS': {
            let newProfile = Object.assign({}, profile);
            newProfile.status = action.status;
            return newProfile;
        }
        case 'SET_PHOTO': {
            return { ...profile, profile: { ...profile.profile, photos: action.file } }
        }
        // case 'SET_PHOTO': {
        //     let newProfile = Object.assign({}, profile);
        //     newProfile.profile.photos = action.file;
        //     return newProfile;
        // }
        default:
            return profile;
    }
}

export const getUserProfileDataThunk = (userId) => {
    return function (dispatch) {
        ProfileApi.getUserProfileData(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatusFromProfileThunk = (userId) => {
    return function (dispatch) {
        ProfileApi.getStatusFromProfile(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatusThunk = (status) => {
    return function (dispatch) {
        ProfileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export const addPhotoThunk = (filePhoto) => {
    return async function (dispatch) {
        let response = await ProfileApi.addPhotoToProfile(filePhoto);
        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    }
}

export const saveProfileThunk = (dataFromProfileForm) => {
    return async function (dispatch, getState) {
        let response = await ProfileApi.saveProfiletoServer(dataFromProfileForm);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfileDataThunk(getState().auth.userId));
        } else {
            dispatch(stopSubmit('profileInformation', { _error: response.data.messages[0] }));
        }
    }
}
export default profileReducer;
