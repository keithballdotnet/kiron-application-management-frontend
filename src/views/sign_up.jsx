'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { USER_TYPES } from '../constants';
import * as formUtils from '../utils/forms';

const FIELDS = [
  'firstName', 'lastName', 'email',
  'password', 'passwordConfirm',
  'userType'
];

const validate = function (values) {
  const errors = {};
  formUtils.required(values, 'firstName', errors);
  formUtils.required(values, 'lastName', errors);
  formUtils.required(values, 'email', errors);
  formUtils.validateEmail(values, 'email', errors);
  formUtils.required(values, 'password', errors);
  formUtils.required(values, 'passwordConfirm', errors);
  if (values.password && values.passwordConfirm) {
    if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Password confirmation doesn't match";
    }
  }
  formUtils.required(values, 'userType', errors);
  return errors;
}

class _SignUpForm extends React.Component {

  render () {
    const {fields: {
      firstName, lastName, email, password, passwordConfirm, userType
    }, handleSubmit} = this.props;

    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        {formUtils.Input(firstName, 'First Name', _cls, {placeholder:'First Name'})}
        {formUtils.Input(lastName, 'Last Name', _cls, {placeholder:'Last Name'})}
        {formUtils.Input(email, 'Email', _cls, {placeholder:'name@domain.com', type:'email'})}
        {formUtils.Input(password, 'Password', _cls, {placeholder:'Your password', type:'password'})}
        {formUtils.ErrorSpan(passwordConfirm)}
        {formUtils.Input(password, null, _cls, {placeholder:'Confirm your password', type:'password'})}
        {formUtils.Radio(userType, _cls, USER_TYPES, {label: 'You are: '})}
        <button type="submit" className={_cls + " btn btn-primary"} onClick={handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const SignUpForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_SignUpForm);

export default class AppInfo extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={this.submit}/>
      </div>
    )
  }
}
