'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

import actions from '../actions';

export default function guard (Component, necessaryRoles) {
  class GuardedComponent extends React.Component {


    constructor(props) {
      super(props);
      this.state = {fine: false};
    }

    componentWillMount () {
      this.checkAuth();
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth();
    }

    checkAuth () {
      this.state.fine = false;
      if (!this.props.isLoggedIn) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
        this.props.dispatch(actions.flashAdd({
          message: `You need to login to access resource ${this.props.location.pathname}`
        }));
      } else if (!necessaryRoles.includes(this.props.role)) {
        this.props.dispatch(pushState(null, `404`));
      } else {
        this.state.fine = true;
      }
    }

    render () {
      return (
        <div className="guard">
          {this.state.fine ? <Component {...this.props}/> : null}
        </div>
      );
    }

  }

  return connect(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    role: state.auth.role
  }))(GuardedComponent);

}
