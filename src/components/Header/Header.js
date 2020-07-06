import React from 'react'
import cssStyles from './Header.module.css'


function Header(props) {
    return (
        <header className={cssStyles.header}>
            <img src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" alt="logo"></img>
            <div className={cssStyles.loginBlock}>
                {props.isLogined
                    ? <div>{props.login} <button onClick={props.logoutFromSiteThunk}>Logout</button></div>
                    : null}
            </div>
        </header>
    );
}

export default Header;
