'use strict';

import React from 'react';
import { reduxForm } from 'redux-form';
import _ from 'lodash';

import {Input, Radio, Select} from './elements';
import validator from './validate';

import { GENDER } from '../constants';
import COUNTRIES from '../constants/countries.json';

const countriesOptions = COUNTRIES.map(({name, code}) => [code, name]);
const genderOptions = Object.keys(GENDER).map(k => {
  return [GENDER[k], _.capitalize(GENDER[k])];
  }
);

const FIELDS = [
  'birthday', 'gender','nationality','phone','city',
  'country', 'zip', 'address', 'addressExtra'
];

const validate = validator({
  birthday: ['required', 'date'],
  gender: 'required',
  nationality: 'required',
  phone: 'phone',
  city: 'required',
  zip: 'required',
  country: 'required',
  address: 'required'
});

class _ApplicationInfoForm extends React.Component {
  render () {
    const {fields: {
      birthday, gender, nationality, phone,
      country, city, zip, address, addressExtra,
    }, handleSubmit} = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        <Input
          field={birthday} cls={_cls}
          label='Birth date' placeholder='YYYY-MM-DD'/>
        <Select
          field={gender} cls={_cls} label='Gender' options={genderOptions}/>
        <Select
          field={nationality} cls={_cls} label='Nationality'
          options={countriesOptions}/>
        <Input
          field={phone} cls={_cls}
          label='Phone Number' placeholder='01234567' type='tel'/>
        <h3>Your Address</h3>
        <Select
          field={country} cls={_cls} label='Country'
          options={countriesOptions}/>
        <Input field={city} cls={_cls} label='City' placeholder='City'/>
        <Input field={zip} cls={_cls} label='Zip Code' placeholder='12345'/>
        <Input
          field={address} cls={_cls}
          label='Street and No' placeholder='Address line 1'/>
        <Input
          field={addressExtra} cls={_cls}
          label='' placeholder='Address line 2'/>
        <button type="submit" className={_cls + " btn btn-primary"}
                onClick={handleSubmit}>
          Next
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'applicationInfo', fields: FIELDS, validate, touchOnBlur: false
}, state => ({
  initialValues: state.application.completed.includes(1) ? state.application.data[1] : {}
}))(_ApplicationInfoForm);
