import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { loginToSiteThunk, logoutFromSiteThunk } from '../../redux/auth_reducer'
import { Redirect } from 'react-router-dom'

class LoginContainer extends React.Component {

    onSubmit = (submitData) => {
        this.props.loginToSiteThunk(submitData.login, submitData.password, submitData.rememberMe);
    }



    render() {
        if (this.props.isLogined) return <Redirect to='/profile' />

        return (
            <Login onSubmit={this.onSubmit} />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogined: state.auth.isLogined,
    }
}

export default connect(mapStateToProps, { loginToSiteThunk, logoutFromSiteThunk })(LoginContainer);
