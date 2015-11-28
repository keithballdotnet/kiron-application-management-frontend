'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { USER_TYPES } from '../constants';
import { GENDER } from '../constants';
import * as formUtils from '../utils/forms';

//import { countriesJson } from '../constants/countries.json';

const FIELDS = [
  'firstName', 'lastName', 'email',
  'birthday', 'gender','nationality','phone'
];

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const validate = function (values) {
  const errors = {};

  formUtils.required(values, 'firstName', errors);
  formUtils.required(values, 'lastName', errors);
  formUtils.required(values, 'email', errors);
  formUtils.required(values, 'birthday', errors);
  formUtils.required(values, 'gender', errors);

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

  if (values.birthday && !/[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/i.test(values.birthday)) {
    errors.birthday = 'Invalid date.';
  }else if (getAge(values.birthday)<5 || getAge(values.birthday)>150 ) {
    errors.birthday = 'You are too young or too old!';
  }


  formUtils.required(values, 'userType', errors);
  return errors;
}

class _Form extends React.Component {

  constructor (props) {
    super(props);
    console.log(props);

  }

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const {fields: {
      firstName, lastName, email, birthday, gender,nationality,phone
    }, handleSubmit} = this.props;

    const baseClass = "block col-6 mb2 field";
    console.log(handleSubmit);

    return (
      <form className="sm-col-6" onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>First Name {formUtils.errorSpan(firstName)}</label>
        <input className={baseClass + (formUtils.hasError(firstName) ? ' is-error' : '')} type="text" placeholder="First Name" {...firstName}/>
        <label>Last Name {formUtils.errorSpan(lastName)}</label>
        <input className={baseClass + (formUtils.hasError(lastName) ? ' is-error' : '')} type="text" placeholder="Last Name" {...lastName}/>
        <label>Email address {formUtils.errorSpan(email)}</label>
        <input className={baseClass + (formUtils.hasError(email) ? ' is-error' : '')} type="email" placeholder="name@domain.com" {...email}/>
        <label>Birthday{formUtils.errorSpan(birthday)}</label>
        <input className={baseClass + (formUtils.hasError(birthday) ? ' is-error' : '')} type="text" placeholder="YYYY-MM-DD" {...birthday}/>
        <label>Gender</label>
        <select required {...gender} className="block col-12 mb1 field">
          <option key={GENDER.MALE} value={GENDER.MALE}>{GENDER.MALE}</option>
          <option key={GENDER.FEMALE} value={GENDER.FEMALE}>{GENDER.FEMALE}</option>
        </select>
        <label>Nationality{formUtils.errorSpan(nationality)}</label>
        <input className={baseClass + (formUtils.hasError(nationality) ? ' is-error' : '')} type="text" placeholder="Nationality" {...nationality}/>
        <label>Phone</label>
        <input required className="block col-12 mb1 field" type="tel" placeholder="XXXXXXXXXX" {...phone}/>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Next</button>
      </form>
    );
  }
}

const Form = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_Form);

export default class ApplyInfo extends React.Component {

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
        <Form onSubmit={this.submit}/>
      </div>
    )
  }
}
