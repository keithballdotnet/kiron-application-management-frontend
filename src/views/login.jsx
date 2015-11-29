'use strict';

import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import LoginForm from '../forms/login';

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }

  submit  = ({email, password}) => {
    this.dispatch(actions.authLoginRequest({email, password}));
  }

  render () {
    return (
      <div className="page container">
        <h1>Login</h1>
        <LoginForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default connect(state => state)(Login);
