import { addMessageActionCreator, newMessageTextActionCreator } from '../../redux/messages_reducer';
import Messenges from './Messenges';
import { connect } from 'react-redux';
import { AuthRedirectContainer } from '../../hoc/AuthRedirectContainer';
import { compose } from 'redux';


function mapStateToProps(state) {
    return {
        messagesData: state.messagesData,
        // isLogined: state.auth.isLogined,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewMessage: (messageObj) => {
            dispatch(addMessageActionCreator(messageObj.message));
        },
        onMessageChange: (e) => {
            let text = e.target.value;
            dispatch(newMessageTextActionCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectContainer
)(Messenges);
