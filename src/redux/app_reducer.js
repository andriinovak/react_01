import { getLoginingDataThunk } from './auth_reducer'



let initialState = {
    initialized: false,
}

export const setInitializedData = () => {
    return {
        type: 'SET_INITIALIZED',
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializeAppThunk = () => {
    return function (dispatch) {
        let promise = dispatch(getLoginingDataThunk());
        promise.then(() => {
            dispatch(setInitializedData());
        });
    }
}

export default appReducer;
