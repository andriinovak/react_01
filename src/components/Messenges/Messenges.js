import React from 'react'
import cssStyle from './Messenges.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import AddMessageReduxForm from './AddMessageForm';

function Messenges(props) {


    let listData = props.messagesData.dialogsData.map((item) => <DialogItem name={item.name} id_num={item.id} key={item.id} />);
    let messData = props.messagesData.messageData.map((item) => <MessageItem id_num={item.id} message={item.message} key={item.id} />);


    return(
        <div className={cssStyle.dialogs}>
            <div className={cssStyle.dialogs_items}>
                {listData}
            </div>
            <div className={cssStyle.messages}>
                {messData}
                <AddMessageReduxForm onSubmit={props.createNewMessage}/>
            </div>
        </div>
    );
}

export default Messenges;
