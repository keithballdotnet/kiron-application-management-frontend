'use strict';

import React from 'react';
import { reduxForm } from 'redux-form';

import { Input, Radio } from './elements';
import validator from './validate';

import { USER_TYPES } from '../constants';

const FIELDS = [
  'firstName', 'lastName', 'email',
  'password', 'passwordConfirm',
  'userType'
];

const validate = validator({
  firstName: 'required',
  lastName: 'required',
  email: ['required', 'email'],
  password: 'required',
  passwordConfirm: ['required', 'sameAs:password'],
  userType: 'required'
});

class _SignUpForm extends React.Component {
  render () {
    const {fields: {
      firstName, lastName, email, password, passwordConfirm, userType
    }, handleSubmit} = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        <Input
          field={firstName} cls={_cls}
          label='First Name' placeholder='First Name'/>
        <Input
          field={lastName} cls={_cls}
          label='Last Name' placeholder='Last Name'/>
        <Input
          field={password} cls={_cls}
          label='Password' placeholder='' type='password'/>
        <Input
          field={email} cls={_cls}
          label='Email' placeholder='name@domain.com' type='email'/>
        <Input
          field={password} cls={_cls}
          label='Password' placeholder='' type='password'/>
        <Input
          field={passwordConfirm} cls={_cls}
          label='' placeholder='Confirm your password' type='password'/>
        <Radio field={userType}
                cls={_cls} label='You are: ' items={USER_TYPES}/>
        <button type="submit" className={_cls + " btn btn-primary"}
                onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'synchronousValidation', fields: FIELDS, validate
})(_SignUpForm);
