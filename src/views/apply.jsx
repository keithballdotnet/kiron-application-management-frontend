'use strict';

import React from 'react';

export default class Apply extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="page container">
        <h1>Application</h1>
        {this.props.children}
      </div>
    );
  }
}
