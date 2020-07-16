import React from 'react'
import { reduxForm } from 'redux-form'
import { createField } from '../../../api/FormsControl/FormsControls';


function ProfileInformationForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <button type='submit'>Save info</button>
            <div>
                <strong>FullName: </strong>{createField('fullName', 'input', 'text')}
            </div>
            <div>
                <strong>Looking for a job: </strong>{props.profile.lookingForAJob ? 'yes' : 'no'}
                {createField('lookingForAJob', 'input', 'checkbox')}
            </div>
            <div>
                <strong>Description job: </strong>{props.profile.lookingForAJobDescription}
                {createField('lookingForAJobDescription', 'textarea', 'text')}
            </div>
            <div>
                <strong>About me: </strong>{props.profile.aboutMe}
                {createField('aboutMe', 'textarea', 'text')}
            </div>
            <div>
                <strong>Contacts: </strong> {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <span key={key}>
                            {key}: {createField(`contacts.${key}`, 'input', 'text', key)}
                        </span>
                    );
                })}
            </div>
            {props.error && props.setErrorInForm(props.error)}
        </form>
    );
}


const ProfileInformationReduxForm = reduxForm({
    form: 'profileInformation'
})(ProfileInformationForm)

export default ProfileInformationReduxForm;
