import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../api/validators/validatorForm';
import { Textarea } from '../../../api/FormsControl/FormsControls';

let maxLength20 = maxLengthCreator(20);

function AddPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component={Textarea} type="text" placeholder='enter post' validate={[requiredField, maxLength20]} />
            </div>
            <div>
                <button type='submit'>Add post</button>
            </div>
        </form>
    );
}

const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'addPostForm'
})(AddPostForm);


export default AddPostReduxForm;
