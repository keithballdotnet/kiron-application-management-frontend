'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { USER_TYPES } from '../constants';
import { GENDER } from '../constants';
import * as formUtils from '../utils/forms';

import countriesJson from '../constants/countries.json';

const FIELDS = [
  'firstName', 'lastName', 'email',
  'birthday', 'gender','nationality','phone','city',
  'country', 'zip', 'address', 'address_extra'
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

  formUtils.required(values, 'birthday', errors);
  formUtils.required(values, 'gender', errors);
  formUtils.required(values, 'city', errors);
  formUtils.required(values, 'country', errors);
  formUtils.required(values, 'zip', errors);
  formUtils.required(values, 'address', errors);

  if (values.birthday && !/[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/i.test(values.birthday)) {
    errors.birthday = 'Invalid date.';
  }else if (getAge(values.birthday)<5 || getAge(values.birthday)>150 ) {
    errors.birthday = 'You are too young or too old!';
  }

  if (values.phone && !/[0-9]+$/i.test(values.phone)) {
    errors.phone = 'Pleas provide just numbers.';
  }

  formUtils.required(values, 'userType', errors);
  return errors;
}

class _InfoForm extends React.Component {

  constructor (props) {
    super(props);
    console.log(props);

  }

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const {fields: {
      birthday,
      gender,
      nationality,
      phone,
      country,
      city,
      zip,
      address,
      address_extra,
    }, handleSubmit} = this.props;

    const baseClass = "block col-6 mb2 field";
    console.log(handleSubmit);

    return (
      <form className="sm-col-6" onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>Birthday{formUtils.ErrorSpan(birthday)}</label>
        <input className={baseClass + (formUtils.hasError(birthday) ? ' is-error' : '')} type="text" placeholder="YYYY-MM-DD" {...birthday}/>
        <label>Gender</label>
        <select required {...gender} className="block col-12 mb1 field">
          <option key={GENDER.MALE} value={GENDER.MALE}>{GENDER.MALE}</option>
          <option key={GENDER.FEMALE} value={GENDER.FEMALE}>{GENDER.FEMALE}</option>
        </select>
        <label>Nationality{formUtils.ErrorSpan(nationality)}</label>
        <input className={baseClass + (formUtils.hasError(nationality) ? ' is-error' : '')} type="text" placeholder="Nationality" {...nationality}/>
        <label>Phone{formUtils.ErrorSpan(phone)}</label>
        <input className={baseClass + (formUtils.hasError(phone) ? ' is-error' : '')} type="text" placeholder="01234567" {...phone}/>
        <label>Address</label>
        <br/>
        <label>Country</label>
        <select required {...country} className="block col-12 mb1 field">
        {
           countriesJson.map(({name, code}) => {
            return <option key={code} value={code}>{name}</option>;
          })
           }
        </select>
        <label>City{formUtils.ErrorSpan(city)}</label>
        <input className={baseClass + (formUtils.hasError(city) ? ' is-error' : '')} type="text" placeholder="Munich" {...city}/>
        <label>ZIP{formUtils.ErrorSpan(zip)}</label>
        <input className={baseClass + (formUtils.hasError(zip) ? ' is-error' : '')} type="text" placeholder="ZIP" {...zip}/>
        <label>Street{formUtils.ErrorSpan(address)}</label>
        <input className={baseClass + (formUtils.hasError(address) ? ' is-error' : '')} type="text" placeholder="55 Berlin St." {...address}/>
        <label>Address extra{formUtils.ErrorSpan(zip)}</label>
        <input className={baseClass + (formUtils.hasError(address_extra) ? ' is-error' : '')} type="text" placeholder="2nd floor" {...address_extra}/>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Next</button>

      </form>
    );
  }
}

const InfoForm = reduxForm({
  form: 'synchronousValidation',
  fields: FIELDS,
  validate
})(_InfoForm);

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
        <h1>Application Process</h1>
        <InfoForm onSubmit={this.submit}/>
      </div>
    )
  }
}
