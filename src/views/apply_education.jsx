'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ApplicationEducationForm from '../forms/application_education';

export default class ApplyEducation extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h2>Your education</h2>
        <ApplicationEducationForm onSubmit={this.submit}/>
      </div>
    )
  }
}
