'use strict';

import React from 'react';
import { reduxForm } from 'redux-form';

import {Input, Radio, Select} from './elements';
import validator from './validate';

import studyProgramJSON from '../constants/study_programs.json'
import previousEducationJSON from '../constants/previous_education.json'

const studyProgramOptions = studyProgramJSON.map(({name, id}) => [id, name]);
const previousEducationOptions = previousEducationJSON.map(
  ({name, id}) => [id, name]
);

const FIELDS = ['studyProgram', 'previousEducation'];

const validate = validator({previousEducation: 'required'});

class _ApplicationEducationForm extends React.Component {
  render () {
    const {
      fields: {studyProgram, previousEducation}, handleSubmit
    } = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        <Select
          field={previousEducation} cls={_cls}
          label='What is your current level of education ?'
          options={previousEducationOptions}/>
        <Select
          field={studyProgram} cls={_cls} nullable
          label='Which study program would be interested in ? (optional)'
          options={studyProgramOptions}/>
        <button type="submit" className={_cls + " btn btn-primary"}
                onClick={handleSubmit}>
          Next
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'synchronousValidation', fields: FIELDS, validate, touchOnBlur: false
})(_ApplicationEducationForm);
