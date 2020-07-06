import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profile_reducer'
import messagesReducer from './messages_reducer'
import usersReducer from './users_reducers'
import authReducer from './auth_reducer'
import appReducer from './app_reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer,
    usersData: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
