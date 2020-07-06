import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../api/FormsControl/FormsControls';
import { requiredField, maxLengthCreator } from '../../api/validators/validatorForm';
import css from '../../api/FormsControl/FormsControls.module.css'


let maxLength30 = maxLengthCreator(30);

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} type="text" placeholder='login' validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <Field name="password" component={Input} type="password" placeholder='password' validate={[requiredField, maxLength30]} />
            </div>
            {props.error && <div className={css.summary_error}>{props.error}</div>}
            <div>
                <label htmlFor="rememberMe">rememberMe</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
}


const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm)

export default LoginReduxForm;
