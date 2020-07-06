import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../api/validators/validatorForm';
import { Textarea } from '../../api/FormsControl/FormsControls';

let maxLength30 = maxLengthCreator(30);

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component={Textarea} type="text" placeholder='enter message' validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <button type='submit'>Add message</button>
            </div>
        </form>
    );
}

const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'addMessageForm'
})(AddMessageForm);


export default AddMessageReduxForm;
