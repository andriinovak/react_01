export const addMessageActionCreator = (text) => {
    return {
        type: 'ADD-MESSAGE',
        text: text,
    }
}
export const newMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: text,
    }
}

let initialState = {
    dialogsData: [
        { id: 1, name: 'andrii' },
        { id: 2, name: 'roma' },
    ],
    messageData: [
        { id: 1, message: 'some message 1' },
        { id: 2, message: 'some message 2' },
    ],
    newMessageText: '',
}

const messagesReducer = (messages = initialState, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newObjMes = {
                id: messages.messageData.length + 1,
                message: action.text,
            };
            let newMessages = Object.assign({}, messages);
            newMessages.messageData.push(newObjMes);
            // newMessages.newMessageText = '';
            return newMessages;
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let newMessages = Object.assign({}, messages);
            newMessages.newMessageText = action.newMessage;
            return newMessages;
        }
        default:
            return messages;
    }
}

export default messagesReducer;
