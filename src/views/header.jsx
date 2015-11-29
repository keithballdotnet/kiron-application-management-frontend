'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
  }

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
            <Link to="/signup"
                  className="btn-primary py3 px1 ml1 mr1 bg-white bg-darken-1 header__button">
              Sign Up
            </Link>
            <Link to="/login"
                  className="btn-primary py3 px1 ml1 mr1 bg-white bg-darken-1 header__button">
              Login
            </Link>
            <Link to="/apply"
                  className="btn-primary py3 px1 ml1 mr1 bg-white bg-darken-1 header__button">
              Apply
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
