'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {pushState} from 'redux-router';

import actions from '../actions';
import LoginForm from '../forms/login';

class Login extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (this.props.auth.isLoggedIn) {
      this.props.dispatch(pushState(null, `/`));
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.auth.isLoggedIn) {
      this.props.dispatch(pushState(null, `/`));
    }
  }

  submit  = ({email, password}) => {
    const next = this.props.location.query.next || '/';
    this.props.dispatch(actions.authLoginRequest(email, password, next));
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
