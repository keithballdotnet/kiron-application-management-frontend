'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { USER_TYPES } from '../constants';
import * as formUtils from '../utils/forms';
import studyprogramJSON from '../constants/studyprograms.json'
import previouseducationJSON from '../constants/previouseducation.json'

const FIELDS = [
  'studyprogram',
  'previouseducation'
];

const studyprogramOptions = studyprogramJSON.map(({name, id}) => [id, name]);
const previouseducationoptions = previouseducationJSON.map(({name, id}) => [id, name]);

const validate = function (values) {
  const errors = {};
  formUtils.required(values, 'previouseducation', errors);
  return errors;
}

class _StudyForm extends React.Component {

  render () {
    const {fields: {
      studyprogram, previouseducation
    }, handleSubmit} = this.props;

    const _cls = "block col-12 mb2";
    const baseClass = "block col-6 mb2 field";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        {formUtils.Select(studyprogram, baseClass, 'Study Program', studyprogramOptions)}
        {formUtils.Select(previouseducation, baseClass, 'Previous Education', previouseducationoptions)}
        <br/>
        <button type="submit" className={_cls + " btn btn-primary"} onClick={handleSubmit}>Next</button>
      </form>
    );
  }
}

const StudyForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_StudyForm);

export default class AppStudy extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h1>Study Program</h1>
        <StudyForm onSubmit={this.submit}/>
      </div>
    )
  }
}
