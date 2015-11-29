'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

import { USER_ROLE } from '../constants';
import actions from '../actions';

function LandingLink (props) {
  const {roles, auth, to, text, hideWhenLoggedIn, showWhenLoggedIn, click} = props;
  if (
    roles && !roles.includes(auth.role) ||
    hideWhenLoggedIn && auth.isLoggedIn ||
    showWhenLoggedIn && !auth.isLoggedIn
  ) {
    return <span></span>;
  }
  if (to) {
    return (
      <Link to={to} className='caps regular btn-primary btn sm-col-12 block col-12 mb2 center'>
        {text}
      </Link>
    );
  } else if (click) {
    const _click = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      click();
    }
    return (
      <a href="#" onClick={_click}
         className='caps regular btn-primary btn sm-col-12 block col-12 mb2 center'>
        {text}
      </a>
    );
  }
}


class Landing extends React.Component {
  constructor (props) {
    super(props);
  }

  logout = () => {
    this.props.dispatch(actions.authLogout())
    this.props.dispatch(pushState(null, `/`));
  };

  render () {
    return (
        <div className='landing flex flex-center white bg-gray bg-cover bg-center'>
          <div className='page container flex-center'>
                <LandingLink to='/login' text='Login'
                            hideWhenLoggedIn auth={this.props.auth}/><br/>
                <LandingLink to='/signup' text='Sign Up'
                            hideWhenLoggedIn auth={this.props.auth}/>
                <LandingLink to='/apply' text='Apply'
                            roles={[USER_ROLE.APPLICANT]} auth={this.props.auth}/>
         </div>
        </div>
    );
  }
}

export default connect(state => state)(Landing);