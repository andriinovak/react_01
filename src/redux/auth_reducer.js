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

export const setCaptchaUrlInState = (captchaUrl) => {
    return {
        type: 'SET_CAPTCHA_URL',
        captchaUrl: captchaUrl,
    }
}

let initialState = {
    isDownload: false,
    userId: null,
    login: null,
    email: null,
    isLogined: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                captchaUrl: action.captchaUrl,
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

export const loginToSiteThunk = (email, password, rememberMe, captcha) => {
    return async function (dispatch) {
        let response = await LoginingApi.loginToSite(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getLoginingDataThunk());
        } else if (response.data.resultCode === 10) {
            dispatch(getLoginingDataThunk());
            dispatch(getCaptchaUrlThunk());
            dispatch(stopSubmit('loginForm', { _error: response.data.messages }));
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

export const getCaptchaUrlThunk = () => {
    return async function (dispatch) {
        let response = await LoginingApi.getCaptchaUrl();
        let captchaUrl = response.data.url;
        dispatch(setCaptchaUrlInState(captchaUrl));
    }
}


export default authReducer;
