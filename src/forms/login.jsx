'use strict';

import React from 'react';
import { reduxForm } from 'redux-form';

import {Input} from './elements';
import validator from './validate';

const FIELDS = ['email', 'password'];
const validate = validator({
  email: ['required', 'email'],
  password: 'required'
});

class _LoginForm extends React.Component {
  render () {
    const {fields: {email, password}, handleSubmit} = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        <Input
          field={email} cls={_cls}
          label='Email' placeholder='name@domain.com' type='email'/>
        <Input
          field={password} cls={_cls}
          label='Password' placeholder='' type='password'/>
        <button type="submit" className={_cls + " btn btn-primary"}
                onClick={handleSubmit}>
          Login
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'synchronousValidation', fields: FIELDS, validate, touchOnBlur: false
})(_LoginForm);
