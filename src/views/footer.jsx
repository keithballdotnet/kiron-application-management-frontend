'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import actions from '../actions';


class Landing extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
         <footer className="p2">
           <div className="container">
              <div className="sm-col">
                  © 2015
                  <strong>&nbsp;Kiron</strong>
              </div>
              <div className="right sm-col-right white">
                <a className="white" href="http://kiron.university/contact-us">Contact & Imprint</a>
              </div>
           </div>
         </footer>
    );
  }
}

export default connect(state => state)(Landing);