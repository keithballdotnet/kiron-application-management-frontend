'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

import { USER_ROLE } from '../constants';
import actions from '../actions';

function HeaderLink (props) {
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
      <Link to={to} className='btn-primary p2 ml1 mr1 bg-white bg-darken-1 header__button'>
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
         className='btn-primary p2 ml1 mr1 bg-white bg-darken-1 header__button'>
        {text}
      </a>
    );
  }
}

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  logout = () => {
    this.props.dispatch(actions.authLogout())
    this.props.dispatch(pushState(null, `/`));
  };

  render () {
    return (
      <header>
        <nav className="clearfix bg-white gray border-bottom">
          <div className="ml3 mr3">
            <Link to="/" className="sm-col header__logo">
              <img width="80" src="http://kiron.university/img/logo.png"/>
            </Link>
          </div>
          <div className="sm-col-right align-middle head-col-right border-box header__right">
            <HeaderLink to='/login' text='Login'
                        hideWhenLoggedIn auth={this.props.auth}/>
            <HeaderLink to='/signup' text='Sign Up'
                        hideWhenLoggedIn auth={this.props.auth}/>
            <HeaderLink to='/apply' text='Apply'
                        roles={[USER_ROLE.APPLICANT]} auth={this.props.auth}/>
            <HeaderLink click={this.logout} text='Logout'
                        showWhenLoggedIn auth={this.props.auth}/>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(state => state)(Header);
