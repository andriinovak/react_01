import React from 'react'
import css from './FormsControls.module.css'


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

