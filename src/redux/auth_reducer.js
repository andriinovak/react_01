import { LoginingApi } from "../api/api"
import { stopSubmit } from "redux-form"

export const setAuthUserData = (userId, login, email, isLogined) => {
    return {
        type: 'SET_USER_DATA',
        data: {
            userId,
            login,
            email,
            isLogined,
        }
    }
}


let initialState = {
    isDownload: false,
    userId: null,
    login: null,
    email: null,
    isLogined: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const getLoginingDataThunk = () => {
    return async function (dispatch) {
        let response = await LoginingApi.getMyLoginData();
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}


// export const getLoginingDataThunk = () => {
//     return function (dispatch) {
//         return LoginingApi.getMyLoginData().then(response => {
//             if (response.data.resultCode === 0) {
//                 let { id, login, email } = response.data.data;
//                 dispatch(setAuthUserData(id, login, email, true));
//             }
//         })
//     }
// }

export const loginToSiteThunk = (email, password, rememberMe) => {
    return async function (dispatch) {
        let response = await LoginingApi.loginToSite(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getLoginingDataThunk());
        } else {
            dispatch(stopSubmit('loginForm', { _error: response.data.messages }));
        }
    }
}

export const logoutFromSiteThunk = () => {
    return async function (dispatch) {
        let response = await LoginingApi.logoutFromSite();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
