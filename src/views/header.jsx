'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className="head clearfix .bg-white gray border-bottom">
      <div className="ml3 mr3">
        <div className="sm-col headlogo">
          <Link to="/" className=""><img id="logo" width="80" src="http://kiron.university/img/logo.png" id="logo"></img></Link>
        </div>
        <div className="sm-col-right align-middle head-col-right">
          <Link to="/signup" className="btn-primary py3 px1 ml1 mr1 bg-white bg-darken-1 head-button">SIGN UP</Link>
          <Link to="/login" className="btn-primary  py3 px1 ml1 mr1 bg-white bg-darken-1 head-button">LOGIN</Link>
          <Link to="/apply_documents" className="btn-primary  py3 px1 ml1 mr1 bg-white bg-darken-1 head-button">DOCUMENT</Link>
        </div>
        </div>
      </nav>
    );
  }
}

  