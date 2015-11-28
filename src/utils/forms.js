'use strict';

import React from 'react';

export function required (values, key, errors) {
  if (!values[key]) {
    errors[key] = 'Required';
  }
}

const _EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validateEmail (values, key, errors) {
  if (values[key] && !_EMAIL_REGEX.test(values[key])) {
    errors[key] = 'Invalid email address';
  }
}

export function hasError (field) {
  return field.touched && field.error;
}

export function ErrorSpan (field) {
  return hasError(field) ? <span className="red">({field.error})</span> : '';
}

export function Input (field, label, cls, {type='text', placeholder=''}) {
  return (
    <div>
    {label ? <label>{label} {ErrorSpan(field)}</label> : ''}
    <input className={'field ' + cls + (hasError(field) ? ' is-error' : '')}
           type={type}
           placeholder={placeholder} {...field}/>
    </div>
  );
}

export function Radio (field, cls, obj, {label}) {
  return (
    <div className={cls}>
    <label>
    {label || ''}
    {
      Object.keys(obj).map((k) => {
        const value = obj[k];
        return (
            <span key={k}>
              <input key={k} type="radio" {...field} value={value}/> {value}
            </span>
        )
      })
    }
    </label>
    </div>
  );
}
