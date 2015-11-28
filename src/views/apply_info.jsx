'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

import { GENDER } from '../constants';
import countriesJson from '../constants/countries';
import * as formUtils from '../utils/forms';

const _fields = [
  "firstName", "lastName", "email",
  "birthday", "gender", "nationality",
  "phone",
  // addressCountry, addressCity, addressStreet, addressZipCode, addressSpecial
];

const validate = (values) => {
  const errors = {};
  _required(values, 'firstName', errors);
  _required(values, 'lastName', errors);
  _required(values, 'email' errors);
  _required(values, 'birthday' errors);
  _required(values, 'gender' errors);
  _required(values, 'nationality' errors);
}

class _Form extends React.Component {

  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const {fields: {
      firstName, lastName, email,
      birthday, gender, nationality,
      phone,
      // addressCountry, addressCity, addressStreet, addressZipCode, addressSpecial
    }, handleSubmit} = this.props;
    return (
      <form className="sm-col-6" onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>First Name</label>
        <input required className="block col-12 mb1 field" type="text" placeholder="First Name" {...firstName}/>
        <label>Last Name</label>
        <input required className="block col-12 mb1 field" type="text" placeholder="Last Name" {...lastName}/>
        <label>Email address</label>
        <input required className="block col-12 mb1 field" type="email" placeholder="name@domain.com" {...email}/>
        <label>Birthday</label>
        <input required className="block col-12 mb1 field" type="text" placeholder="DD/MM/YYYY" {...birthday}/>
        <label>Gender</label>
        <select required {...gender} className="block col-12 mb1 field">
          <option key={GENDER.MALE} value={GENDER.MALE}>{GENDER.MALE}</option>
          <option key={GENDER.FEMALE} value={GENDER.FEMALE}>{GENDER.FEMALE}</option>
        </select>
        <label>Nationality</label>
        <select required {...nationality} className="block col-12 mb1 field">
          {
            countriesJson.map(({name, code}) => {
              return <option key={code} value={code}>{name}</option>;
            })
          }
        </select>
        <label>Phone</label>
        <input required className="block col-12 mb1 field" type="tel" placeholder="XXXXXXXXXX" {...phone}/>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Next</button>
      </form>
    );
  }
}

const Form = reduxForm({form: 'simple', fields: _fields})(_Form);

export default class ApplyInfo extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <Form/>
  }
}
