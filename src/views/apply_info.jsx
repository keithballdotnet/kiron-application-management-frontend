'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ApplicationInfoForm from '../forms/application_info';

class ApplicationInfo extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h2>Personal Information</h2>
        <ApplicationInfoForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default connect(state => state)(ApplicationInfo);
