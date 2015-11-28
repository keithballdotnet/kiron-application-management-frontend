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

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

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

  constructor (props) {
    super(props);
    console.log(props);

  }

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const {fields: {
      firstName, lastName, email, password, passwordConfirm, userType
    }, handleSubmit} = this.props;

    const baseClass = "block col-6 mb2 field";
    console.log(handleSubmit);

    return (
      <form className="sm-col-6" onSubmit={handleSubmit}>
        <label>First Name {formUtils.errorSpan(firstName)}</label>
        <input className={baseClass + (formUtils.hasError(firstName) ? ' is-error' : '')} type="text" placeholder="First Name" {...firstName}/>
        <label>Last Name {formUtils.errorSpan(lastName)}</label>
        <input className={baseClass + (formUtils.hasError(lastName) ? ' is-error' : '')} type="text" placeholder="Last Name" {...lastName}/>
        <label>Email address {formUtils.errorSpan(email)}</label>
        <input className={baseClass + (formUtils.hasError(email) ? ' is-error' : '')} type="email" placeholder="name@domain.com" {...email}/>
        <label>Password {formUtils.errorSpan(password)}</label>
        <input className={baseClass + (formUtils.hasError(password) ? ' is-error' : '')} type="password" placeholder="Password" {...password}/>
        {formUtils.errorSpan(passwordConfirm)}
        <input className={baseClass + (formUtils.hasError(passwordConfirm) ? ' is-error' : '')} type="password" placeholder="Confirm password" {...passwordConfirm}/>
        <div className="block col-6 mb2">
        {
          Object.keys(USER_TYPES).map((k) => {
            return (
              <label key={k}>
                <input type="radio" {...userType} value={USER_TYPES[k]}/> {USER_TYPES[k]}
              </label>
            );
          })
        }
        </div>
        <button type="submit" className="block mb2 btn btn-primary" onClick={handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const SignUpForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_SignUpForm);

export default class SignUp extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }



  render () {
    console.log(this.submit);
    return (
      <div className="page container">
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={this.submit}/>
      </div>
    )
  }
}
