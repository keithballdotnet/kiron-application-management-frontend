'use strict';

import React from 'react';
import { connect } from 'react-redux';

import SignUpForm from '../forms/signup';

class SignUp extends React.Component {

  constructor (props) {
    super(props);
  }

  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="page container">
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default connect(state => state)(SignUp);
