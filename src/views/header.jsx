'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className="clearfix white bg-black">
        <div className="sm-col">
          <Link to="/" className="btn py2">Kiron Application Management</Link>
        </div>
        <div className="sm-col-right">
          <Link to="/signup" className="btn py2">Sign Up</Link>
          <Link to="/apply_info" className="btn py2">Apply</Link>
        </div>
      </nav>
    );
  }
}
