'use strict';

import { bindActionCreators } from 'redux';
import _ from 'lodash';

import store from './store';
import * as types from './constants/actions';

function makeAction (type) {
  return (payload) => {
    return {type, payload };
  };
}

export default Object.keys(types).reduce((actions, type) => {
  return {
    ...actions,
    [_.camelCase(type)]: makeAction(type)
  }
}, {});
