import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { logoutFromSiteThunk } from '../../redux/auth_reducer'


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogined: state.auth.isLogined,
        login: state.auth.login,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, {
    logoutFromSiteThunk,
})(HeaderContainer);
