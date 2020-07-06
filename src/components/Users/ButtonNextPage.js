import React from 'react'
import cssStyle from './ButtonNextPage.module.css'


function ButtonNextPage(props) {
    return (
            <button onClick={() => props.onClick(props.name)}>
                <span className={props.current === props.name ? cssStyle.button_current : cssStyle.button_not_current}>
                    {props.name}
                </span>
            </button>
    );
}

export default ButtonNextPage;
