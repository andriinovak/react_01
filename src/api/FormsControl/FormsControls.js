import React from 'react'
import css from './FormsControls.module.css'
import { Field } from 'redux-form';


export function Textarea({ input, meta, props }) {
    return (
        <div className={css.formControl + ' ' + (meta.touched && meta.error ? css.error : '')}>
            <textarea {...input} {...props} />
            <div>
                {
                    meta.touched && meta.error && <span>{meta.error}</span>
                }
            </div>
        </div>
    );
}

export function Input({ input, meta, props }) {
    return (
        <div className={css.formControl + ' ' + (meta.touched && meta.error ? css.error : '')}>
            <input {...input} {...props} />
            <div>
                {
                    meta.touched && meta.error && <span>{meta.error}</span>
                }
            </div>
        </div>
    );
}

export function createField(name, component, type, placeholder = '', validators = [], props = {}) {
    return (
        <div>
            <Field name={name} component={component} type={type} placeholder={placeholder} validate={validators} {...props} />
        </div>
    );
}

