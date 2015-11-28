'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { USER_TYPES } from '../constants';
import * as formUtils from '../utils/forms';

const FIELDS = [
  'avatar', 'passport'
];

const validate = function (values) {
  const errors = {};

  return errors;
}

class _DocumentsForm extends React.Component {

  constructor (props) {
    super(props);
    console.log(props);

  }

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const {fields: {
      avatar
    }, handleSubmit} = this.props;

    const baseClass = "block col-6 mb2 field";
    console.log(handleSubmit);

    return (
      <form className="sm-col-6" onSubmit={handleSubmit}>
      <div>
          <label>Avatar</label>
          <div>
            <input type="file" {...avatar} value={ null } />
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <button type="submit" className="block mb2 btn btn-primary" onClick={handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const DocumentsForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_DocumentsForm);

export default class ApplyDocuments extends React.Component {

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
        <DocumentsForm onSubmit={this.submit}/>
      </div>
    )
  }
}