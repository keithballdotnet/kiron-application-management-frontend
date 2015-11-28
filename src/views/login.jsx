'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import * as formUtils from '../utils/forms';

const FIELDS = ['email', 'password'];

const validate = function (values) {
  const errors = {};
  formUtils.required(values, 'email', errors);
  formUtils.validateEmail(values, 'email', errors);
  formUtils.required(values, 'password', errors);
  return errors;
}

class _LoginForm extends React.Component {
  render () {
    const {fields: {email, password}, handleSubmit} = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        {formUtils.Input(
          email, 'Email', _cls,
          {placeholder:'name@domain.com', type:'email'})}
        {formUtils.Input(
          password, 'Password', _cls,
          {placeholder:'Your password', type:'password'})}
        <button type="submit" className={_cls + " btn btn-primary"}
                onClick={handleSubmit}>
          Login
        </button>
      </form>
    );
  }
}

const LoginForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_LoginForm);

export default class Login extends React.Component {

  submit (data) {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h1>Login</h1>
        <LoginForm onSubmit={this.submit}/>
      </div>
    );
  }
}
