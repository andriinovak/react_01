import React from 'react'
import cssStyles from './Nav.module.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className={cssStyles.nav}>
            <Link to='/profile' className={cssStyles.link}>Profile</Link><br />
            <Link to='/messenges' className={cssStyles.link}>Messenges</Link><br />
            {/* <Link to='/news' className={cssStyles.link}>News</Link><br /> */}
            {/* <Link to='/music' className={cssStyles.link}>Music</Link><br /> */}
            <br />
            <Link to='/users' className={cssStyles.link}>Users</Link><br />
            
            {/* <Link to='/settings' className={cssStyles.link}>Settings</Link><br /> */}
            
            <Link to='/login' className={cssStyles.link}>Login</Link><br />
        </nav>
    );
}

export default Nav;