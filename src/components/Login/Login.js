import React from 'react'
import LoginReduxForm from './LoginForm';

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={props.onSubmit} captcha={props.captcha} />
        </div>
    );
}

export default Login;
