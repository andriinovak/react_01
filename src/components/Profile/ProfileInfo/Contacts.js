import React from 'react'
import css from './Contacts.module.css'


function Contacts(props) {
    const contactsList = (data) => {
        let list = [];
        for (let key in data) {
            if (data[key] !== null) {
                list.push(<div key={key} className={css.contact}><strong>{key}:</strong> {data[key]}</div>)
            }
        }
        return list;
    }

    return (
        <div>
            <strong>Contacts: </strong>
            {contactsList(props.contacts)}


        </div>
    );
}


export default Contacts;
