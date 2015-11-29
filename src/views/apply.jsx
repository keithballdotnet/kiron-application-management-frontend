'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ApplyIntro from './apply_intro';
import ApplyStages from './apply_stages';

class ApplyStage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {}
}

class Apply extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="page container">
        <h1>Application Process</h1>
        <ApplyStages stage={this.props.stage} completed={this.props.completed}/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => state.application)(Apply);
