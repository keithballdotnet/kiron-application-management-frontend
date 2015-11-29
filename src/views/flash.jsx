'use strict';

import React from 'react';

import { connect } from 'react-redux';

import actions from '../actions';

const CLS = {
  warning: 'bold p2 mb1 mt1 black bg-yellow rounded',
  error: 'bold p2 mb1 mt1 white bg-red rounded',
  success: 'bold p2 mb1 mt1 white bg-green rounded'
}

class FlashMessage extends React.Component {
  constructor (props) {
    super(props);
  }

  onClick = () => {
    console.log(this.props);
    this.props.onClick(this.props.id);
  }

  render () {
    const _cls = CLS[this.props.level] || CLS.warning;
    return (
      <div className={_cls} onClick={this.onClick}>
        {this.props.message}
      </div>
    );
  }
}

class FlashMessageList extends React.Component {
  constructor (props) {
    super(props);
  }

  close = (id) => {
    this.props.dispatch(actions.flashRemove({id}));
  }

  render () {
    return (
      <div className="flash-zone fixed bottom-0 right-0 m1 sm-col-3">
        {Object.keys(this.props.flash).map((id) => {
          const {level, message} = this.props.flash[id];
          return <FlashMessage
            key={id} id={id}
            onClick={this.close} level={level} message={message}/>
        })}
      </div>
    );
  }
}

export default connect(state => state)(FlashMessageList);
