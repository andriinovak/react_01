import React from 'react'
import { Link } from 'react-router-dom'

function DialogItem(props) {
    let path = '/dialogs/' + props.id_num;
    return(
        <div>
            <Link to={path}>{props.name}</Link>
        </div>
    );
}

export default DialogItem;
