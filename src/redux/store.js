import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'hello_1' },
                { id: 2, post: 'hello_2' },
                { id: 3, post: 'hello_3' },
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'andrii' },
                { id: 2, name: 'roma' },
            ],
            messageData: [
                { id: 1, message: 'some message 1' },
                { id: 2, message: 'some message 2' },
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('blabla')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this);

    },

};


export default store;
window.store = store;
